const express = require('express');
const router = express.Router();
const { listContacts } = require('../models/Contact');

// GET all contacts (for admin dashboard)
router.get('/', async (req, res) => {
  try {
    const contacts = await listContacts();
    res.json(contacts);
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

module.exports = router;