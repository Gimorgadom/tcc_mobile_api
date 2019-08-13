import { Router } from 'express';

import { sendEmail } from './sendEmail';

export const router = Router();

router.post('/send', sendEmail);