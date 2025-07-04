const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

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

    // Instead of inserting into Supabase, just log the data
    console.log('Contact submission:', { name, email, phone, businessType, requirements, created_at: new Date().toISOString() });

    res.status(200).json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({ success: false, message: 'Failed to save submission.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});