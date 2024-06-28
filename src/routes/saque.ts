import { Router } from 'express';
import { realizarSaque } from '../controllers/saqueController';

const router = Router();

router.post('/', realizarSaque);

export default router;
