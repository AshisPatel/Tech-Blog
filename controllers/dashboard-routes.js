const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req,res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'title', 'post_text', 'created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
    })
    .then(async dbPostData => {
        // serialize the data
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(posts);
        const userObj = await User.findByPk(req.session.user_id);
        const username = userObj.dataValues.username; 
        console.log(`
        Username is: ${username}
        `);
        res.render('dashboard', {
            posts,
            signedIn: true,
            username
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    })
});

router.get('/edit/:id', withAuth, (req,res) =>{
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'post_text', 'created_at']
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).end();
            return; 
        }
        const post = dbPostData.get({ plain: true });
        res.render('edit-post', { post,
        signedIn: true });
    })
})

module.exports = router; 