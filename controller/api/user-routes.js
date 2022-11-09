const router = require('express').Router();
const { User } = require('../../models');

router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  //

// router.get('/:id', async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.params.id, {
//       include: [{ model: Blog }],
//     });
//     if (!userData) {
//       res.status(404).json({ message: 'No user id found!' });
//       return;
//     }
//   const user = userData.get({ plain: true });
//   res.render('', { user, loggedIn: req.session.loggedIn });
// } catch (err) {
//   console.log(err);
//   res.status(500).json(err);
// } 
// });

router.post('/signup', async (req, res) => {
  // 
  try {
    const blogData = await User.create({
      user_name: req.body.user_name, 
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
    const userData = await User.findOne({ where: {user_name: req.body.user_name}});
      if (!userData) {
        res.status(400).json({ message: 'Mission failed, we will get them next time'});
        return;
      }
      console.log("body ok")
  const approvePassword = await userData.checkPassword(req.body.password);
  if (!approvePassword){
    res.status(400).json({ message: 'Mission failed, we will get them next time'})
    return;
  }
  console.log("password ok")
  // req.session.userId = userData.id;
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


module.exports = router;