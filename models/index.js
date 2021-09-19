const User = require('./User');
const Post = require('./Post');
const Comment = require('./Post');

// Create associations

// A Post can only belong to one User, but a User can have many Posts
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});
// A Comment can only belong to one User, but a User can have many Comments
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});
// A Comment can only belong to one Post, but a Post can have many Comments 
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };