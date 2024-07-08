const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('./config');
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
// MongoDB connection

// User model
const User = require('./models/User');

// Routes
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


app.listen(5000, () => console.log(`Server started on port ${5000}`));
