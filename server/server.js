const path = require('node:path');
const express = require('express');
const cors = require('cors');
require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend from src/ and map /images to public/images
app.use(express.static(path.join(__dirname, '..', 'src')));
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));

app.get('/api/health', (req,res)=>res.json({ ok:true }));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/payouts', require('./routes/payouts'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log(`API server running on http://localhost:${PORT}`);
});
