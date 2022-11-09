const exphbs = require('express-handlebars');
const express = require('express');
const app = express();
const session =  require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const env = require('dotenv').config
// const path = require('path')
const routes = require('./controller')
const sequelize = require('./config/connection')
const helpers = require('./utils/helpers')
// const session =  require('express-session')
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: false,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess))
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({helpers});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    })});