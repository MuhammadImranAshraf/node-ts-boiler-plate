import EmailController from "@v1Controllers/emailController";
import { Router } from "express";
const router = Router();

router.route("/send").post(EmailController.sendEmail);

const emailRoutes = router;
export default emailRoutes;
