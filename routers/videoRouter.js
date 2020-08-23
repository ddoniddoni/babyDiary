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
import { uploadVideo, uploadImage, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

//업로드
videoRouter.get(routes.uploadVideo, onlyPrivate, getVideoUpload);
videoRouter.get(routes.uploadImage, onlyPrivate, getImageUpload);
videoRouter.post(routes.uploadVideo, onlyPrivate, uploadVideo, postVideoUpload);
videoRouter.post(routes.uploadImage, onlyPrivate, uploadImage, postImageUpload);

// videoDetail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
