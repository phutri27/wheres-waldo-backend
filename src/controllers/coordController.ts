import { Request, Response } from "express"
import { coordObj } from "../queries/script.js"

export const getCharacterForCoord = async (req: Request, res: Response) => {
    const map_id = Number(req.params.map_id)
    const x_coord = Number(req.params.x_coord)
    const y_coord = Number(req.params.y_coord)
    const name = req.params.character_name as string
    try {
        const coordRes = await coordObj.getCoord(map_id, name)
        const result = Math.abs(x_coord - (coordRes?.x_coord as number)) <= 2.5 && Math.abs(y_coord - (coordRes?.y_coord as number)) <= 2.5
        if (result){
            return res.status(200).json({
                name: coordRes?.character_name,
                message: `You found ${coordRes?.character_name}`
            })
        } else {
            return res.status(301).json({
                message: "Wrong!!! Try again"
            })
        }
    } catch (error) {
        return res.status(401).json({message: "Cannot query database"})
    }

}