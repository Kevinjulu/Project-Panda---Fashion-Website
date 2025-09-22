const express = require('express');
const router = express.Router();

const sample = [
  { name:'Aisha N.', amount: 8500, city:'Nairobi', minutesAgo: 2 },
  { name:'Brian K.', amount: 12200, city:'Mombasa', minutesAgo: 7 },
  { name:'Wanjiru L.', amount: 5600, city:'Kisumu', minutesAgo: 12 },
  { name:'Omondi P.', amount: 9800, city:'Nakuru', minutesAgo: 20 },
];

router.get('/', (req,res)=>{
  res.json(sample);
});

module.exports = router;
