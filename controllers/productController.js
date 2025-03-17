const Product = require('../models/product');
const Joi = require('joi');
const { successResponse, errorResponse } = require('../helpers/api_response');

exports.createProduct = async (req, res) => {
    const categorySchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string(),
        price: Joi.number().required(),
        sku: Joi.string(),
        status: Joi.boolean(),
    });

    const { error } = categorySchema.validate(req.body);

    if (error != undefined) {
        return errorResponse(res, error.details[0].message);
    }

    try {
        const { name, description, price, sku, status } = req.body;
        const product = new Product({ name, description, price, sku, status });
        await product.save();

        return successResponse(res, 'Product created successfully', product);
    } catch (error) {
        console.log(error);

        return errorResponse(res, error.message);
    }
};
