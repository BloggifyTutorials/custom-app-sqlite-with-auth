const Sequelize = Bloggify.sequelize
module.exports = require("bloggify-user-auth/lib/user-model")(null, {
    country: {
        type: Sequelize.STRING,
        defaultValue: ""
    }
})
