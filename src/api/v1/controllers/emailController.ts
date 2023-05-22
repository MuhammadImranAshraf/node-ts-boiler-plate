import EmailService from "@shared/services/emailService";
import { IEmailOptions } from "@v1Interfaces/IEmailOptions";
import HBSGenerator from "@v1Services/hbsTemplateGenerator";
import { NextFunction, Request, Response } from "express";
import ApiResponse from "utils/ApiResponse";
import tryCatchAsync from "utils/tryCatchAsync";

class EmailController {
  static sendEmail = tryCatchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      ApiResponse.success(res, {}, "email sending", 200);
    }
  );
}

export default EmailController;
