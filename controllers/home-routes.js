const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);

    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_text',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            // Serialize each post element
            
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', {
                posts
            });
        })

});

router.get('/signin', (req,res) => {
    res.render('sign-in');
});

router.get('/signup', (req,res) => {
    res.render('sign-up');
});

module.exports = router;