const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', (req,res) => {
    User.findAll({
        attributes: { exclude: ['password']}
    })
    .then(dbUserData => res.status(200).json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    });
});

router.get('/:id', (req,res) => {
    User.findOne(
        {
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
            }, 
            include: [
                {
                    model: Post, 
                    attributes: ['id', 'title', 'post_text']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text']
                }
            ]
        })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user with that id found.' });
                return; 
            }
            res.status(200).json(dbUserData); 
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json(err); 
        });
});

router.post('/', (req,res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => {
        res.status(200).json(dbUserData); 
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    });
});

router.put('/:id', (req,res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(404).json({ message: 'No user with this id found.' });
            return;
        }
        res.status(200).json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    });
});

router.delete('/:id', (req,res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user with this id found.' });
            return; 
        }
        res.status(200).json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);  
    });
});

module.exports = router; 