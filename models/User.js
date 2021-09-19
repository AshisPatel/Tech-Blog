const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {

    // Create an instance method to verify passwords 
    async checkPassword(loginPw) {
        // will check the password given when signing in to the password of the instance of the User object that is utilizing this method 
        const match = await bcrypt.compare(loginPw, this.password)
        return match;
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // Add more validation?
            len: [8]
        }
    }
},
    {
        hooks: {
            // Setup hook to salt / hash the password prior to storing it in the user table 
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // Setup another hook in the event that we will create a feature to allow user's to change their password 
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timeStamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User; 