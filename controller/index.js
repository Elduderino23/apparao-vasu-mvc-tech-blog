const router = require('express').Router();
const apiRoutes = require('./api');
const blogRoutes = require('./api/blog-routes');

router.use('/api', apiRoutes);
router.use('/', blogRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;