const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Following extends Model {}

Following.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    follower: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    followee: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // }
    // post_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'post',
    //     key: 'id'
    //   }
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'following',
  }
)

module.exports = Following;