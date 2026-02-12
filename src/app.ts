import express from "express"
import "dotenv/config"
import routes from "./routes/index.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true })); 

app.use("/", routes.coord)
app.use("/scoreboard", routes.scoreboard)

app.listen(3000, () => {
  console.log(`Server running on http://localhost:${3000}`);
});
