const express = require("express")
const router = express.Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

router.post("/register", async(req,res)=>{

    const {name,email,password} = req.body

    const hash = await bcrypt.hash(password,10)

    const user = new User({
        name,email,password:hash
    })

    await user.save()

    res.json({message:"Registered Successfully"})
})

router.post("/login", async(req,res)=>{

    const {email,password} = req.body

    const user = await User.findOne({email})

    if(!user) return res.json({message:"User not found"})

    const valid = await bcrypt.compare(password,user.password)

    if(!valid) return res.json({message:"Invalid password"})

    const token = jwt.sign({id:user._id}, "secret")

    res.json({token,user})

})

module.exports = router
