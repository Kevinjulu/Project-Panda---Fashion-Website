const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const { createContact } = require('../models/Contact');

// Validation middleware
const validateContact = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be 2-100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name must contain only letters and spaces'),
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('Must be a valid email address'),
  body('service')
    .trim()
    .isIn(['Design Consult', 'Runway Modeling', 'Editorial Modeling', 'Social Collaboration'])
    .withMessage('Invalid service selection'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be 10-1000 characters')
    .escape() // Sanitize HTML
];

router.post('/', validateContact, async (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { name, email, service, message } = req.body;
    const created = await createContact({ name, email, service, message });
    
    res.status(201).json({ 
      ok: true, 
      contact: { 
        id: created.id, 
        name: created.name, 
        email: created.email,
        service: created.service,
        created_at: new Date().toISOString()
      }
    });
  } catch (err) {
    console.error('Contact creation error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
