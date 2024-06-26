const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt'); //encrypts password
const sequelize = require('../config/connection');

//model for users of Tek Tok.  Includes their id, first and last name, email, username, password which is encrypted, and profile image and 'about me' aka readme. section
class User extends Model {
  async checkPassword(loginPw) {
    return await bcrypt.compare(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [5]
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    profile_pic: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://assets-global.website-files.com/6344d53d2aaf56043be2ca60/63988bbcf41e7b8faf9131a1_Account-Icon.webp'
    },
    readme: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Write whatever you want about yourself!'
    }
  },
  {
    hooks: { //encrypts password
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // afterValidate: async (newUserData) => {
      //   newUserData.password = await bcrypt.hash(newUserData.password, 10);
      //   return newUserData;
      // },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
)

module.exports = User;