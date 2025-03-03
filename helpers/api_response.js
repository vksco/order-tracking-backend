/**
 * Sends a success response with a 200 status code.
 * @param {Object} res - The response object.
 * @param {string} message - The success message.
 * @param {Object} [data={}] - The data to include in the response.
 * @returns {Object} - The JSON response.
 */
exports.successResponse = (res, message, data = {}) => {
    return res.status(200).json({
        success: true,
        message,
        data,
    });
};

/**
 * Sends an error response with a specified status code.
 * @param {Object} res - The response object.
 * @param {string} message - The error message.
 * @param {number} [statusCode=400] - The status code to use for the response.
 * @returns {Object} - The JSON response.
 */
exports.errorResponse = (res, message, statusCode = 400) => {
    return res.status(statusCode).json({
        success: false,
        message,
    });
};
