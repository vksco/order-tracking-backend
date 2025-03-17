const Joi = require('joi');
const Category = require('../models/category');
const { successResponse, errorResponse } = require('../helpers/api_response');

exports.createCategory = async (req, res) => {
    const categorySchema = Joi.object({
        name: Joi.string().required(),
        status: Joi.boolean(),
    });

    const { error } = categorySchema.validate(req.body);
    // return successResponse(res, 'User created successfully', error);

    if (error != undefined) {
        return errorResponse(res, error.details[0].message);
    }

    try {
        const { name, status } = req.body;
        const user = new Category({ name, status });
        await user.save();

        return successResponse(res, 'Category created successfully', user);
    } catch (error) {
        console.log(error);

        return errorResponse(res, error.message);
    }
};
