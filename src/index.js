const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
//require('./db')

//App initialize
const app = express();

//Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 


//Configurations
app.set('port', process.env.PORT || 3000)


//Routes
app.use(require('./routes/index.routes'))

//Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})