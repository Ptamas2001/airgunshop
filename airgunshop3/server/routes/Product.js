const express = require ('express')
const router = express.Router()
const {Product} = require('../models')



router.get('/getAll', async (req, res)=>{
    const product = await Product.findAll()
    res.json(product);
    
});

router.get('/bycategoryId/:id', async (req, res)=>{
    const id = req.params.id
    const product = await Product.findAll({where:{categoryId:id}})
    res.json(product); 
    
});

router.get("/byId/:id", async (req, res)=>{
const id = req.params.id;
const product = await Product.findByPk(id);
res.json(product);
})




module.exports = router;