const express = require ('express')
const router = express.Router()
const {PicturesToProducts} = require('../models')



router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const picture = await PicturesToProducts.findAll({where:{productId:id}})
    res.json(picture);
    
});




module.exports = router;