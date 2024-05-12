const User = require('./User');
const Post = require('./Post');
const Following = require('./Following');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Post.belongsTo(User, {
  foreignKey: 'user_id'
})

User.hasMany(Following, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Following.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Post, Following }