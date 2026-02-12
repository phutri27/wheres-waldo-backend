import { body } from "express-validator"
import { scoreboardObj } from "../queries/script.js"

const emptyMsg = "must not be empty"

export const validateUsernane = [
    body("username")
    .trim()
    .notEmpty()
    .withMessage(`Username ${emptyMsg}`)
    .custom(async (value, {req}) => {
        const result = await scoreboardObj.getUsername(value, Number(req.body.map_id))
        if (result){
            throw new Error("Username has been taken")
        }
        return true
    })
]