require("dotenv").config()

const express = require("express")
const app = express()


const Products = require("./routes/Products")
const Users = require("./routes/Users")
const userItems = require("./routes/UserItems")
const Wishlist = require("./routes/Wishlist")
const CustomProduct = require('./routes/CustomProduct')
const Favorite = require('./routes/Favorite')
const HistoryItem = require('./routes/History')

app.use(express.json())


app.get("/", (req, res) => {
     res.status(200).json({message: "The server has been started"})
})

app.get("/wish/:link", (req, res) => {
     res.status(200).json({link: req.params.link})
})

app.use("/api", Users)

app.use("/api", Products)
app.use("/api", CustomProduct)
app.use("/api", Favorite)
app.use("/api", userItems)
app.use("/api", HistoryItem)
app.use("/api/user/me", Wishlist)




app.listen(3000)