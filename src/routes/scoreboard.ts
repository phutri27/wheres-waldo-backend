import express from "express"
import { addToScoreboard, getScoreboard } from "../controllers/scoreboardController.js"

const router = express.Router()

router.post("/", addToScoreboard)
router.get("/:id", getScoreboard)
export default router