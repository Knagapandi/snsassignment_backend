const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');

const app = express();
app.use(cors());
// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Ayuship:9jQOXvCzbH8hq7nI@cluster0.pvgxw4g.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
