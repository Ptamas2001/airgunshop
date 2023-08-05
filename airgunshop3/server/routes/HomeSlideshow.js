const express = require ('express')
const router = express.Router()
const {Homeslides} = require('../models');




router.get('/', async (req, res)=>{
    const homeslides = await Homeslides.findAll()
    res.json(homeslides);
});

router.post('/', async (req, res)=>{
    const image= req.body;
    await Homeslides.create({ image: req.body.image });
    res.json({image});
  });
  


router.post('/delete/:id', async (req,res)=>{
    const id= req.params.id;
    const homeslides = await Homeslides.destroy({where:{id:id}})
})



module.exports = router;