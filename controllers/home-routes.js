const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

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
                posts,
                signedIn: req.session.signedIn
            });
        })

});

router.get('/signin', (req,res) => {
    res.render('sign-in');
});

router.get('/signup', (req,res) => {
    res.render('sign-up');
});

router.get('/post/:id', withAuth, (req,res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'post_text', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'post_id','created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'Post does not exist'});
        }
        const post = dbPostData.get({plain:true});
        res.render('single-post',{
            post,
            signedIn: req.session.signedIn 
        });
    })
})



module.exports = router;