const express = require('express');
const users = require('./routes/userRoutes')
const cors = require('cors')




const app = express()

const port =  8000
app.use(cors())
app.use(express.json())
app.use('/users', users)

app.listen(port, ()=>{
    console.log(`servidor levantado en el puerto ${port}`)
})