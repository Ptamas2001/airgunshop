const express = require ('express')
const router = express.Router()
const {Categories} = require('../models')



router.get('/', async (req, res)=>{
    const categories = await Categories.findAll()
    res.json(categories);
    
});

router.get('/byid/:id',async (req,res)=>{
    const id = req.params.id;
    const categories = await Categories.findByPk(id);
    res.json(categories)
    
})



module.exports = router;