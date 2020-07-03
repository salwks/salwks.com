import express from "express";
import routes from "../routes";
import {
  upload,
  videoDetail,
  editVideo,
} from "../controllers/videoControllers";

const videoRouter = express.Router();
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);

export default videoRouter;
