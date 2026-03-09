const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes")
const orderRoutes = require("./routes/orderRoutes")
const inventoryRoutes = require("./routes/inventoryRoutes")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/pizzaDB")
.then(()=>console.log("MongoDB Connected"))

app.use("/api/auth", authRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/inventory", inventoryRoutes)

app.listen(5000, ()=>console.log("Server running on port 5000"))
