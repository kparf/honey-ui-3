import nodemailer from 'nodemailer';

const EMAIL = process.env.EMAIL;
const EMAIL_SENDER = process.env.EMAIL_SENDER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;


const transport = nodemailer.createTransport({
  host: 'mail.dgroup.by',
  port: 25,
  auth: {
     user: EMAIL_SENDER,
     pass: EMAIL_PASSWORD
  },
  tls: {
      rejectUnauthorized: false
  }
});

export default (req, res) => {
  const {
    name,
    email,
    phone,
    message,
  } = req.body;
  if(req.method === 'POST') {
    try {
      const mes = {
        from: EMAIL_SENDER,
        to: EMAIL,
        subject: 'Пёлка (сообщение)',
        text: `
Имя: ${name}
Почта: ${email}
Телефон: ${phone}

${message}`,
      };
      transport.sendMail(mes, function(err, info) {
          if (err) {
            console.log(err)
          } else {
            console.log(info);
          }
      });

    } catch (err) {
      console.log(err);
    }
    res.statusCode = 200;
    res.end();
  } else {
    res.statusCode = 405;
    res.end();
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}