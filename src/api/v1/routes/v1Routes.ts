import { Router } from "express";
import emailRoutes from "./emailRoutes";
const router = Router();

router.use("/email", emailRoutes);

const v1Routes = router;
export default v1Routes;
