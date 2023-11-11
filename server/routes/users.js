import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ ---> 1st step of CRUD*/  
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE ---> 2nd step of CRUD*/
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;