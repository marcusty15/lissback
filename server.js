require('dotenv').config()
const express = require('express');
const users = require('./Routes/userRoutes')
const cors = require('cors');
const bodyParser = require('body-parser');
const mailRouter = require('./Routes/mailRouter');
const mail = require('./Routes/mailRouter copy');
const mail2 = require('./Routes/mailRouter copy 2');
const recursosAudios = require('./Routes/recursosAudios')
const coment = require('./Routes/coment');
const app = express()


const corsOptions = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(express.json())
// app.use('/', (req, res) => res.send('Hola Mundo'))
app.use('/users', users)
app.use('/email', mailRouter)
app.use('/hom', mail)
app.use('/enc', mail2)
app.use('/recursosAudios', recursosAudios)
app.use('/comentarios', coment)

app.use(express.static(__dirname + '/public'))

let port = process.env.PORT
if (port == null || port == '')
{
    port = 3000
}

app.listen(port, () =>
{
    console.log(`servidor levantado en el puerto ${port}`)
})