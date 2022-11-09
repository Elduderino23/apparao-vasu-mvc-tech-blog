const express = require('express');
const app = express();
const sequelize = require('./config/connection')
const session =  require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const path = require('path')
// const session =  require('express-session')
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const PORT = process.env.PORT || 3001;
//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routes = require('./controller')
app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    })});

    // const express = require('express')
// const app = express()
// const sequelize = require('./config/connection')
// const PORT = process.env.PORT || 3001;

// const handlebars = require('express-handlebars')

// app.set('view engine', 'handlebars');

// app.engine('handlebars', handlebars({
//   layoutsDir: __dirname + '/views/layouts',
//   }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// const routes = require('./controller')
// app.use(routes);
// app.use(express.static('public'))

// app.get('/', (req, res) => {
//   //
//   res.render('main', {layout : 'index'});
//   });

// app.get('/', function(req, res){
//     res.send('another day in coding')
// })