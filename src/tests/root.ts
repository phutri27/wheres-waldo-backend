import express from "express"
import routes from "../routes/index.js"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use("/", routes.coord)
app.use("/scoreboard", routes.scoreboard)

export default app
