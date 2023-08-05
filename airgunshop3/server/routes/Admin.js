const express = require ('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const {Admin} = require('../models')

router.get('/', async (req, res)=>{
    const user = await Admin.findAll()
    res.json(user);
});

router.post("/registration",async (req, res)=>{
    const {username, password ,mobile,name,birthDate } = req.body;
    await bcrypt.hash(password, 10).then((hash)=> {
        console.log(req.body)
        User.create({
            username: username,
            password: hash,
            mobile: mobile,
            name: name,
            birthDate: birthDate,
            
            
        })
        res.json("Success")
    })
})

router.post("/login", async (req,res)=>{
    const {username, password} = req.body;
    const admin = await Admin.findOne({where: {username: username}});
    if (!admin) {
        res.json({error:"Wrong username"});
    } else {
        bcrypt.compare(password, admin.password).then((match)=>{
            if(!match) {
                res.json({error:"Wrong username or password"})
            } else {
                res.json("You logged in")
            }
        });
    }
})

module.exports = router;
