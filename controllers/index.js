const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes); 

// Catch all non-existant requests 
router.use((req,res) => {
    res.status(404).end();
});

module.exports = router; 