import express from "express";
import routes from "../routes";
import {
  deleteVideo,
  editVideo,
  videoDetail,
  getVideoUpload,
  getImageUpload,
  postImageUpload,
  postVideoUpload,
} from "../controllers/videoController";
import { uploadVideo, uploadImage } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.uploadVideo, getVideoUpload);
videoRouter.get(routes.uploadImage, getImageUpload);

videoRouter.post(routes.uploadVideo, uploadVideo, postVideoUpload);
videoRouter.post(routes.uploadImage, uploadImage, postImageUpload);
videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
