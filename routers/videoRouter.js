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
  getEditVideo,
  postEditVideo,
} from "../controllers/videoController";
import { uploadVideo, uploadImage } from "../middlewares";

const videoRouter = express.Router();

//업로드
videoRouter.get(routes.uploadVideo, getVideoUpload);
videoRouter.get(routes.uploadImage, getImageUpload);
videoRouter.post(routes.uploadVideo, uploadVideo, postVideoUpload);
videoRouter.post(routes.uploadImage, uploadImage, postImageUpload);

// videoDetail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
