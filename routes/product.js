import { Router } from "express";
import { create, list , read , remove , search, update, paging, priceFilter } from "../controllers/product";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";
import { userById } from "../controllers/user";
const router = Router();

router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/products/:userId', requireSignin, isAuth,isAdmin, create);
router.delete('/products/:userId/:id', requireSignin,isAuth,isAdmin , remove);
router.put('/products/:userId/:id', requireSignin, isAuth,isAdmin, update);
router.post ('/search', search);
router.get ('/products/paging', paging);
router.get('/products/priceFilter', priceFilter);
router.param("userId", userById);

export default router;