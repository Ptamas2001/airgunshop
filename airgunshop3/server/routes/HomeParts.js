const express = require ('express')
const router = express.Router()
const {HomeParts} = require('../models')



router.get('/', async (req, res)=>{
    const parts = await HomeParts.findAll()
    res.json(parts);
});

router.post('/', async (req, res)=>{
    
    console.log(req.body)
    await HomeParts.create( req.body );
    
    res.json("siker");
  });
  

router.get('/byid/:id',async (req,res)=>{
    const id = req.params.id;
    const parts = await HomeParts.findByPk(id);
    res.json(parts)
    
})



module.exports = router;