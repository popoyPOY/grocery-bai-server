require("dotenv").config()

const express = require("express")
const app = express()


const Products = require("./routes/Products")
const Users = require("./routes/Users")
const userItems = require("./routes/UserItems")


app.use(express.json())


app.get("/", (req, res) => {
     res.status(200).json({message: "The server has been started"})
})

app.use("/api", Users)

app.use("/api", Products)
app.use("/api", userItems)




app.listen(3000)