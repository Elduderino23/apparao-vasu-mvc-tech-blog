const express = require('express')
const app = express()
const sequelize = require('./config/connection')
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routes = require('./controller')
app.use(routes);

app.get('/', function(req, res){
    res.send('another day in coding')
})

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`http://${PORT}!`);
    })});