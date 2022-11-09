const router = require('express').Router();
const { User, Blog, Post } = require('../../models');
// const {withAuth} = require('../../utils')
//
router.get('/login', async (req, res) => {
 
  try {

    res.render('login', {
      
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  //

// router.get('/user/:id', async (req, res) => {
//   // 
//   // try {
//   //   const userData = await User.findByPk(req.params.id, {
//   //     // 
//   //     include: [{ model: Blog }],
//   //   });

//   //   if (!userData) {
//   //     res.status(404).json({ message: 'No user id found!' });
//   //     return;
//   //   }

//   //   res.status(200).json(userData);
//   // } catch (err) {
//   //   res.status(500).json(err);
//   // }

//   try {
//     const userData = await User.findByPk(req.params.id, {
//       include: [
//         {
//           model: Blog,
//           attributes: [
//             'id',
//             'user_name',
//             'password',
//           ],
//         },
//       ],
//     });

//     const user = userData.get({ plain: true });
//     // 
//     res.render('', { user, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
//   // 
// });

router.post('/signup', async (req, res) => {
  // 
  try {
    const blogData = await User.create({
      user_name: req.body.username, 
      password: req.body.password
    });
    req.session.save(() =>{
      req.session.loggedIn = true;
      res.status(200).json(blogData);
    })
  } catch (err) {
    res.status(400).json(err);
  }

});

router.post('/login', async (req, res) => {
  // 
  try {
    const userData = await User.findOne({ where: {user_name: req.body.username}});
      if (!userData) {
        res.status(404).json({ message: 'Mission failed, we will get them next time'});
        return;
      }
  const approvePassword = await userData.checkPassword(req.body.password);
  if (!approvePassword){
    res.status(404).json({ message: 'Mission failed, we will get them next time'})
    return;
  }
  req.session.id = userData.id;
  req.session.save(()=>{
    req.session.loggedIn = true;
    res.status(200).json({
      user: userData, message:" Lets gooooooooo!"
    })
  })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect to the homepage
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
//   // Otherwise, render the 'login' template
//   res.render('login');
// });

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