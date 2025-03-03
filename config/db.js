const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database using the URI from environment variables
        await mongoose.connect(process.env.MONGODB_URI, {
            // Use the new URL parser to avoid deprecation warnings
            useNewUrlParser: true,
            // Use the new Server Discover and Monitoring engine to avoid deprecation warnings
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        // Log any errors that occur during the connection attempt
        console.error('MongoDB connection error:', error);
        // Exit the process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
