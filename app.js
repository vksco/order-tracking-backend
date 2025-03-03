const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Route handlers
const userRoutes = require('./routes/userRoutes');
const indexRoutes = require('./routes/index');

// Routes
app.use('/api/users', userRoutes);
app.use('/', indexRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
