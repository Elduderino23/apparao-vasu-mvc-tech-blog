const router = require('express').Router();
const apiRoutes = require('./api');
const blogRoutes = require('./api/blog-routes');

router.use('/api', apiRoutes);
router.use('/', blogRoutes);

module.exports = router;