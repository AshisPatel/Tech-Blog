const router = require('express').Router();


// Catch all non-existant requests 
router.use((req,res) => {
    res.status(404).end();
});

module.exports = router; 