require('dotenv').config()


const nodemailer = require('nodemailer');
const sendEmail = (nombre, apellido, email, telefono ) => new Promise((res, rej)=>{
    let transporter = nodemailer.createTransport({
        host: 'mail.lissetalbarracin.com',
        port: 465,
        secure: true,
        auth:{
            user: process.env.USER,
            pass: process.env.PASSWORD

        },
        tls: {
            rejectUnauthorized: false
        }
    })

    let msg = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
</head>
<body>
    <div style="width: 100%; background-color: white;">
        <div style="padding: 20px 10px 20px 10px;  ">
            <img style="width: 600px;" src='cid:res' alt=""/>
        </div>
    </div>
</body>
</html>`

    let mailOptions = {
        from: 'encuentros@lissetalbarracin.com',
        email,
        subject: `Gracias por registrate ${nombre} ${apellido}`,
        html: msg,
        attachments:[{
            filename: 'RESPUESTA-WEB.png',
            path: './public/img/RESPUESTA-WEB.png',
            cid: 'res'
        }
    ]
        
    }
   
    transporter.sendMail(mailOptions,  (err, data)=>{
        if(err){
            rej(err)
        } else {
            res(true)
        }
    })
})

const enviarCorreo = async (req, res)=>{
    const {nombre, apellido,email, telefono } = req.body

    try {
        const email = await sendEmail(nombre, apellido, email, telefono )
        return res.send({
            enviado: true,
            email
        })
    } catch (error) {
        console.log(error)
        res.send({
            enviado: false
        })
    }
}

module.exports = {
    enviarCorreo
}