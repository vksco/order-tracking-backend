const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        const user = new User({ name, username, email, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
