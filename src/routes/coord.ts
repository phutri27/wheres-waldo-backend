import express from "express"
import { getCharacterForCoord } from "../controllers/coordController.js"

const router = express.Router()

router.get("/:map_id/:x_coord/:y_coord/:character_name", getCharacterForCoord)

export default router