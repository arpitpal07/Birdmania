const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage (optional)
const emailList = [];

// Email subscription endpoint
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  if (emailList.includes(email)) {
    return res.status(400).json({ message: 'Email already enrolled' });
  }

  emailList.push(email);
  console.log('New email enrolled:', email);
  res.json({ message: 'Successfully subscribed to Birdmania!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
