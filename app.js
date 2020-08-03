import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.set("view engine", "pug");
app.use(cookieParser()); // 사용자 인증 같은 곳에서 쿠키 검사할 때
app.use(bodyParser.json()); // 사용자가 웹사이트로 전달하는 정보 검사 미들웨어
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // 안전하도록 만드는 미들웨어
app.use(morgan("dev")); // 발생하는 모든일들을 logging하는 미들웨어

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
