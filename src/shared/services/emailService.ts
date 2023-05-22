import config from "@utils/config";
import { IEmailOptions } from "@v1Interfaces/IEmailOptions";
import { createTransport } from "nodemailer";

const smtpTransport = createTransport({
  pool: true,
  host: config.nodemailer.host,
  port: 465,
  secure: true,
  auth: {
    user: config.nodemailer.userName,
    pass: config.nodemailer.password,
  },
});
const sendMail = (options: any) =>
  new Promise((resolve) =>
    smtpTransport.sendMail(options, (error, info) => resolve([error, info]))
  );

class EmailService {
  static send = async (options: IEmailOptions) => {
    try {
      let [error, info]: any = await sendMail(options);
      if (error) throw error;
      console.log("Email sent to:  " + options.to + " " + info.response);
    } catch (error) {
      console.log({ EmailError: error });
    }
  };
}
export default EmailService;
