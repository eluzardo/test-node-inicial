const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan')
require('./db')

app.use(morgan('dev'))
//app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 
//app.use(methodOverride('_method'))


app.set('port', process.env.PORT || 3000)

app.use(require('./routes/index.routes'))

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})