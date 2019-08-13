import { allowCors } from './middlewares/allowCors';
import * as bodyParser from 'body-parser';
import { router } from './routes';
import * as settings from '../settings';

const express = require('express');
const app = express();
// const nodeMailer = require('nodemailer');
app.use(allowCors);
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', router);

const server = app.listen(settings.port, () => {
    console.log(`server started: PORT: ${settings.port}`);
  });
  
  process.on('unhandledRejection', () => { /* ignore */ });
  process.on('SIGINT', () => {
    server.close(() => {
      process.exit(0);
    });
  });