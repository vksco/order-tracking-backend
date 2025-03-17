const { successResponse, errorResponse } = require('../helpers/api_response');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const Joi = require('joi');

exports.login = async (req, res) => {
    /***
     * 1) validate params
     * 2) find ther user in DB
     * 3) check if the password is same
     * 4) the return the user details with a generated JWT token
     */

    const userValidation = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });
    const { error } = userValidation.validate(req.body);

    if (error) {
        return errorResponse(res, error.details[0].message);
    }

    const { email, password } = req.body;

    try {
        // Find the user in mongo DB
        const user = await User.findOne({ email });
        if (!user) {
            return errorResponse(res, 'User not found', 404);
        }

        // if the pass is same
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return errorResponse(res, 'Invalid password', 401);
        }

        //Return the user details with a generated JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_UNIQUE_KEY, {
            expiresIn: '1h',
        });

        return successResponse(res, 'Login success', {
            user: { ...user.toJSON(), password: null },
            token: token,
        });
    } catch (error) {
        console.log(error);

        return errorResponse(res, 'An error occurred', 500);
    }
};
