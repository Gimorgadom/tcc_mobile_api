import { NextFunction, Request, Response } from 'express';
import { emailBodyText } from '../../services/emailBodyText';
const nodeMailer = require('nodemailer');

export async function sendEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log(req);
  try {

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'project.interative.stories@gmail.com',
            pass: 'engcomputacao'
        }
    });
    let mailOptions = {
        from: '<project.interative.stories@gmail.com>', // sender address
        to: 'daniel.machadofe@gmail.com' , // list of receivers
        subject: 'relatório', // Subject line
        text: 'rel', // plain text body
        html: emailBodyText(req.body.relatory, req.body.player) // html body
    };

    await transporter.sendMail(mailOptions);

    res.sendStatus(200);

    // huehue 
      console.log('mybodyy', req.body);
    res.status(200).json(req.body);
  } catch (err) {
    next(err);
  }
}