import { Router } from 'express';
import { createClaims, getClaims } from '../service/claims.service';


const router = Router();

router.post('/create/claims', createClaims)
router.get('/claims', getClaims)

export { router }