import { Router } from "express";
import { create, list , read , remove , update } from "../controllers/product";
import { checkAuth, isAuth, requireSignin } from "../middlewares/checkAuth";
import { userById } from "../controllers/user";
const router = Router();

router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, read);
router.post('/products/:userId', requireSignin, isAuth, create);
router.delete('/products/:userId/:id', requireSignin,isAuth , remove);
router.put('/products/:userId/:id', requireSignin, isAuth, update);

router.param("userId", userById);

export default router;