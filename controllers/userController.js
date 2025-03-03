const Joi = require('joi');
const User = require('../models/user');
const { successResponse, errorResponse } = require('../helpers/api_response');

exports.createUser = async (req, res) => {
    const userSchema = Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });
    const { error } = userSchema.validate(req.body);

    if (error) {
        return errorResponse(res, error.details[0].message);
    }

    try {
        const { name, username, email, password } = req.body;
        const user = new User({ name, username, email, password });
        await user.save();
        return successResponse(res, 'User created successfully', user);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
