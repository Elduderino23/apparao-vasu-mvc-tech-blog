const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('another day in coding')
})

app.listen(3000, () => 
{console.log('look at me')

}
)