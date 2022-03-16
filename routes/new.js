import { Router } from "express";
import { create, list , read , remove , update } from "../controllers/new";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

router.get('/new', checkAuth, list);
router.get('/new/:id', checkAuth, read);
router.post('/news', checkAuth, create);
router.delete('/new/:id', checkAuth, remove);
router.put('/new/:id', checkAuth, update);

export default router;