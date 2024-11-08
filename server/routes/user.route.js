import express from "express";
import {
  getLogout,
  getProfile,
  getUserProfile,
  postLogin,
  postRegister,
  postSetProfile,
  postSetProfileStudent,
  updateUser,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

// Get Api
router.get("/logout", getLogout);
router.get("/profile", isAuthenticated, getProfile);
router.get("/userprofile", isAuthenticated, getUserProfile);
// Post Api
router.post("/signup", postRegister);
router.post("/login", postLogin);
// router.post('/setprofile',upload.fields([{name:'profilePhoto'},{name:'backgroundImage'}]),postSetProfile);
router.post(
  "/setprofile",
  isAuthenticated,
  upload.fields([
    { name: "profilePhoto", maxCount: 1 },
    { name: "backgroundImage", maxCount: 1 },
  ]),
  postSetProfile
);
router.post(
  "/updateprofile",
  isAuthenticated,
  upload.fields([
    { name: "profilePhoto", maxCount: 1 },
    { name: "backgroundImage", maxCount: 1 },
  ]),
  updateUser
);

router.post(
  "/setprofilestudent",
  isAuthenticated,
  upload.fields([
    { name: "profilePhoto", maxCount: 1 },
    { name: "backgroundImage", maxCount: 1 },
  ]),
  postSetProfileStudent
);

export default router;
