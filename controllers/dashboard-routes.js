const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

router.get('/', (req,res) => {
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
    .then(dbPostData => {
        // serialize the data
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', {
            posts,
            signedIn: true,
            username: req.session.username
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    })
});

router.get('/edit/:id', (req,res) =>{
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