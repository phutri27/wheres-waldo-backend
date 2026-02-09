import { Request, Response } from "express"
import { scoreboardObj } from "../queries/script"

export const addToScoreboard = async (req: Request, res: Response) => {
    const { username } = req.body
    const map_id = Number(req.body.map_id)
    const score = Number(req.body.score)
    try {
        await scoreboardObj.postScoreboard(map_id, username, score)
        return res.status(200).json({message: "Add to scoreboard succesfully"})
    } catch (error) {
        return res.status(401).json({message: "Cannot query database"})
    }   
}

export const getScoreboard = async (req: Request, res: Response) => {
    
    try {
        const id = Number(req.params.id)
        const result = await scoreboardObj.getScoreboard(id)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(401).json({message: "Cannot query database"})
    }
}
