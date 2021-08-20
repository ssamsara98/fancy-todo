import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'ok' });
  return;
});

export default router;
