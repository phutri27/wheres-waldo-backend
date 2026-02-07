import express from "express"
import { getCharacterForCoord } from "../controllers/coordController.js"

const router = express.Router()

router.get("/:map_id/:coord/:character_name", getCharacterForCoord)

export default router