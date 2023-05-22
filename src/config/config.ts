import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const server = {
  port: process.env.SERVER_PORT || 3010,
  environment: process.env.NODE_ENV,
};
const baseUrl = {
  admin: process.env.ADMIN_BASE_URL,
  partner: process.env.PARTNER_BASE_URL,
  socket: process.env.SOCKET_BASE_URL,
};
const nodemailer = {
  host: process.env.NODEMAILER_HOST,
  userName: process.env.NODEMAILER_USERNAME,
  password: process.env.NODEMAILER_PASSWORD,
};
const unsubscribe = {
  url: process.env.UNSUBSCRIBE_URL,
};

const config = { server, baseUrl, nodemailer, unsubscribe };

export default config;
