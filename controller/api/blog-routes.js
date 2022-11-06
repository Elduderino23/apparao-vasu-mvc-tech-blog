const router = require('express').Router();
const { Blog, Post  } = require('../../models');

// 

router.get('/', async (req, res) => {
  // 
  try {
    const blogData = await Blog.findAll({
      // 
      include: [{ model: Post }],
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
  // 
});

router.get('/:id', async (req, res) => {
  // 
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      // 
      include: [{ model: Post }],
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog id found!' });
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
      res.status(404).json({ message: 'No blog id found!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;