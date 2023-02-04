require("dotenv").config();

const nodemailer = require("nodemailer");
const sendEmail = (
  nombre,
  apellido,
  email,
  telefono,
  orderid,
  paypal,
  zelle,
  bizum,
  wise,
  binance,
  comentario
) =>
  new Promise((res, rej) => {
    let transporter = nodemailer.createTransport({
      host: "mail.lissetalbarracin.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

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
            <img style="width: 600px;" src='cid:NEWSLETTER' alt=""/>
        </div>
    </div>
</body>
</html>`;

    let mailOptions = {
      from: "encuentros@lissetalbarracin.com",
      to: `${email}`,
      subject: `Gracias por regístrate ${nombre} ${apellido}`,
      html: msg,
      attachments: [
        {
          filename: "NEWSLETTER.jpg",
          path: "./public/img/NEWSLETTER.jpg",
          cid: "NEWSLETTER",
        },
      ],
    };

    let mailAdmin = {
      from: "encuentros@lissetalbarracin.com",
      to: "encuentros@lissetalbarracin.com",
      subject: "nuevo registro de evento",
      text: `se ha registrado el siguiente usuario: ${nombre} ${apellido}, teléfono: ${telefono}, email: ${email}, Pago por medio de: PayPal: ${paypal}, Zelle: ${zelle}, Bizum: ${bizum}, Wise: ${wise}, binance ${binance}, orderID o numero de transacción es: ${orderid}, comentario: ${comentario}`
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(true);
      }
    });
    transporter.sendMail(mailAdmin, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(true);
      }
    });
  });

const enviarCorreo2 = async (req, res) => {
  const { nombre, apellido, email, telefono, orderid, paypal,
    zelle,
    bizum,
    wise, binance, comentario } = req.body;

  try {
    const data = await sendEmail(nombre, apellido, email, telefono, orderid, paypal,
        zelle,
        bizum,
        wise,
        binance, comentario);
    return res.send({
      enviado: true,
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      enviado: false,
    });
  }
};

module.exports = {
  enviarCorreo2,
};
