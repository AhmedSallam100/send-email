const nodemailer = require("nodemailer");

module.exports.email_send = (req, res) => {
  const { fullName, phone, email, msg } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.ADMAINEMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const EmailSender = ({ fullName, phone, email, msg }) => {
    const options = {
      from: `${email}`,
      to: process.env.ADMAINEMAIL,
      subject: "Thank You For Sending This Message",
      text: "New Message",
      //     html: `
      //     <!DOCTYPE html>
      // <html lang="en">
      //   <head>
      //     <meta charset="UTF-8" />
      //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      //     <title>Document</title>
      //   </head>
      //   <style>
      //     @import url("https://fonts.googleapis.com/css2?family=Alexandria:wght@100;200;300;400;500;600;700;800;900&display=swap");
      //     * {
      //       font-family: "Alexandria", sans-serif;
      //     }
      //     ::selection {
      //       color: white;
      //       background-color: #560ff3;
      //     }
      //   </style>
      //   <body>
      //     <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
      //       <div style="max-width: 700px; background-color: white; margin: 0 auto">
      //         <div
      //           style="
      //             width: 100%;
      //             background-color: #130b30;
      //             padding: 20px 0;
      //             border-radius: 10px;
      //             border-bottom-right-radius: 0;
      //             border-bottom-left-radius: 0;
      //           "
      //         >
      //           <a href="${process.env.CLIENT_URL}"
      //             ><img
      //               src="https://iili.io/HDc4dLG.png"
      //               style="width: 100%; height: 70px; object-fit: contain"
      //           /></a>
      //         </div>
      //         <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
      //           <p
      //             style="
      //               font-weight: 800;
      //               font-size: 1.2rem;
      //               padding: 0 30px;
      //               direction: rtl;
      //             "
      //           >
      //             من Ahmed Sallam
      //           </p>
      //           <div style="font-size: 0.8rem; margin: 0 30px; direction: rtl">
      //             <p>الإسم: <b>${fullName}</b></p>
      //             <p>الرقم: <b>${phone}</b></p>
      //             <p>الايميل: <b>${email}</b></p>
      //             <p>الرسالة: <i>${msg}</i></p>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </body>
      // </html>
      //     `,
    };
    Email(options);
  };

  transporter.sendMail(EmailSender, async (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};
