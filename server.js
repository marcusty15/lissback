require('dotenv').config()

const express = require('express');
const users = require('./routes/userRoutes')
const cors = require('cors');
const bodyParser = require('body-parser');
const mailRouter = require('./Routes/mailRouter');


const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use('/users', users)
app.use('/email', mailRouter)

app.use(express.static(__dirname + '/public'))

let port = process.env.PORT
if(port== null || port == ''){
    port = 3000
}

app.listen(port, ()=>{
    console.log(`servidor levantado en el puerto ${port}`)
})