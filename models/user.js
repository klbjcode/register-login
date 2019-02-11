module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define('User', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        // username: {
        //     type: DataTypes.TEXT
        // },

        // about: {
        //     type: DataTypes.TEXT
        // },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        // last_login: {
        //     type: DataTypes.DATE
        // },

        // status: {
        //     type: DataTypes.ENUM('active', 'inactive'),
        //     defaultValue: 'active'
        // }


    });

    return User;

}