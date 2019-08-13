import { Router } from 'express';
import {router as email} from './email';

export const router = Router();

router.use('/email', email);

