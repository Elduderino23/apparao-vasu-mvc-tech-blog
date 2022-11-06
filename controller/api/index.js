const router = require('express').Router();
const blogRoutes = require('./blog-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/Blog', blogRoutes);
router.use('/User', userRoutes);
router.use('/Post', postRoutes);

module.exports = router;