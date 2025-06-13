const { UserModel } = require('./User.schema');

const insertUser = userObj => {
    return new UserModel(userObj).save();
};

module.exports = {
    insertUser,
};
