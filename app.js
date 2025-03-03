const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const indexRoutes = require('./routes/index');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/', indexRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
