const { successResponse } = require('../helpers/api_response');

exports.login = async (req, res) => {
    /***
     * 1) validate params
     * 2) find ther user in DB
     * 3) check if the password is same
     * 4) the return the user details with a generated JWT token
     */

    const user = {
        name: 'vikash',
        username: 'vikash',
        email: 'admin@email.com',
    };

    return successResponse(res, 'Login success', {
        user: user,
        token: 'dkakjdkasdajdkdhjkskdhashjkdhjkahk',
    });
};
