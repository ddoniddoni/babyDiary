import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });
const multerImage = multer({ dest: "uploads/images/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "BabyDiary";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
export const uploadImage = multerImage.single("imageFile");
