import { body } from "express-validator"
import { scoreboardObj } from "../queries/script"

const emptyMsg = "must not be empty"

export const validateUsernane = [
    body("username")
    .trim()
    .notEmpty()
    .withMessage(`Username ${emptyMsg}`)
    .isLength({max: 50})
    .withMessage('Username must not exceed 50 characters')
    .custom(async (value, {req}) => {
        const result = await scoreboardObj.getUsername(value)
        if (result){
            throw new Error("Username has been taken")
        }
        return true
    })
]