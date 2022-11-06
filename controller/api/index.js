const router = require('express').Router();
const blogRoutes = require('./blog-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/blog', blogRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;