const express = require('express');
const router = express.Router();
const { createContact } = require('../models/Contact');

router.post('/', async (req,res)=>{
  try{
    const { name, email, service, message } = req.body||{};
    if(!name || !email || !service || !message){
      return res.status(400).json({ error:'Missing required fields' });
    }
    const created = await createContact({name,email,service,message});
    res.status(201).json({ ok:true, contact: created });
  }catch(err){
    res.status(500).json({ error:'Server error' });
  }
});

module.exports = router;
