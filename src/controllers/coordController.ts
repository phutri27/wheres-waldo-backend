import { Request, Response } from "express"
import { coordObj } from "../queries/script.js"

export const getCharacterForCoord = async (req: Request, res: Response) => {
    const map_id = Number(req.params.map_id)
    const coord = Number(req.params.coord)
    const name = req.params.character_name as string

    try {
        const coordRes = await coordObj.getCoord(map_id, name)
        const result = Math.abs(coord - (coordRes?.coordinate as number)) <= 0.2

        if (result){
            return res.status(200).json({
                name: coordRes?.character_name,
                message: `You found ${coordRes?.character_name}`
            })
        } else {
            return res.status(301).json({
                message: "Wrong coordinates"
            })
        }
    } catch (error) {
        return res.status(401).json({message: "Cannot query database"})
    }

}