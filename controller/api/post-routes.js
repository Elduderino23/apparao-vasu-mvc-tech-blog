const router = require('express').Router();
const { Post, User  } = require('../../models');

// 

router.get('/', async (req, res) => {
  // 
  try {
    const postData = await Post.findAll({
      // 
      include: [{ model: User }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
  // 
});

router.get('/:id', async (req, res) => {
  // 
  try {
    const postData = await Post.findByPk(req.params.id, {
      // 
      include: [{ model: User }],
    });

    if (!postData) {
      res.status(404).json({ message: 'No post id found!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
  // 
});

router.post('/', async (req, res) => {
  // 
  try {
    const postData = await Post.create(req.body);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.delete('/:id', async (req, res) => {
  // 
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post id found!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;