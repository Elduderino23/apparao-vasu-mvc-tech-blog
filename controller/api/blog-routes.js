const router = require('express').Router();
const { Blog, User, Post  } = require('../../models');

// 
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });

    const blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );

    res.render('home', {
      blogs
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  // 
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      // 
      include: [{ model: User }],
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog1 id found!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
  // 
});

router.post('/', async (req, res) => {
  // 
  try {
    const blogData = await Blog.create(req.body);
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.delete('/:id', async (req, res) => {
  // 
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog2 id found!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;