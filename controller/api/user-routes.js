const router = require('express').Router();
const { User, Blog, Post } = require('../../models');
// const logIn = require('../../public/login')
// const logOut = require('../../public/logout')
// const signUp = require('../../public/signup')
//
router.get('/login', async (req, res) => {
 
  try {
    const userData = await User.findAll({
      include: [
        {
          model: Blog,
          attributes: ['user_name'],
        },
      ],
    });

    const users = userData.map((blog) =>
      blog.get({ plain: true })
    );

    res.render('login', {
      users
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  // try {
  //   const userData = await User.findAll({
  //     include: [
  //       {
  //         model: Blog,
  //         attributes: ['user_name', 'password'],
  //       },
  //     ],
  //   });

  //   const user = userData.map((user) =>
  //     user.get({ plain: true })
  //   );
  //   // Send over the 'loggedIn' session variable to the 'homepage' template
  //   res.render('login', {
  //     user,
  //     loggedIn: req.session.loggedIn,
  //   });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
// });
  //

router.get('/user/:id', async (req, res) => {
  // 
  // try {
  //   const userData = await User.findByPk(req.params.id, {
  //     // 
  //     include: [{ model: Blog }],
  //   });

  //   if (!userData) {
  //     res.status(404).json({ message: 'No user id found!' });
  //     return;
  //   }

  //   res.status(200).json(userData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }

  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Blog,
          attributes: [
            'id',
            'user_name',
            'password',
          ],
        },
      ],
    });

    const user = userData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'gallery' template
    res.render('', { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // 
});

router.post('/', async (req, res) => {
  // 
  try {
    const blogData = await User.create(req.body);
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.post('/login', async (req, res) => {
  // 
 
  console.log('login routes engaged')

});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

router.delete('/:id', async (req, res) => {
  // 
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: 'No user id found!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;