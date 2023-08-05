const express = require ('express')
const router = express.Router()
const {Post} = require('../models')



router.get('/', async (req, res)=>{
    const post = await Post.findAll()
    res.json(post);
    
});



module.exports = router;