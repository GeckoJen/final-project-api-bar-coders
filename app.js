import express from "express";
import path from "path";

import { auth } from "express-oauth2-jwt-bearer";
import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import createError from "http-errors";

import teachersRouter from './routes/teachers.js'
import usersRouter from "./routes/users.js";

const app = express();

export const checkJwt = auth({
  audience: "https://fourweekproject.herokuapp.com/",
  issuerBaseURL: `https://book-worms.eu.auth0.com`,
});

// getAccessToken() {
//       const accessToken = localStorage.getItem('access_token');
//       if (!accessToken) {
//         throw new Error('No access token found');
//       }
//       return accessToken;
//     }

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/teachers", teachersRouter);
app.use("/", usersRouter);

// 401 Unauthorized – client failed to authenticate with the server
app.use(function (req, res, next) {

      next(createError.Unauthorized("Unable to authenticate with the server"));

});

export default app;
