import { Router } from "express";
import { signin, signup } from "../controllers/product";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

router.get('/users', checkAuth, signin);
router.get('/users', checkAuth, signup);

export default router;