const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Add Supabase client
const SUPABASE_URL = 'https://tlqjdcjarytxeuvikexb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscWpkY2phcnl0eGV1dmlrZXhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NDk5MTMsImV4cCI6MjA2NzEyNTkxM30.WwrpU-mRpFnwBy3Y1cCtNbiX9fNr2Ss-dzjA_ZZkcL4';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, businessType, requirements } = req.body;

    // Validate required fields
    if (!name || !email || !businessType || !requirements) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Insert into Supabase
    const { error } = await supabase.from('contact_submissions').insert([
      {
        name,
        email,
        phone,
        businessType,
        requirements,
        created_at: new Date().toISOString()
      }
    ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ success: false, message: 'Failed to save submission.' });
    }

    res.status(200).json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({ success: false, message: 'Failed to save submission.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});