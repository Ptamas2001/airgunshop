module.exports = (sequelize, Datatypes)=>{

    const PicturesToProducts = sequelize.define("PicturesToProducts", {
       
        image:{
            type:Datatypes.STRING,
            allowNULL:false,
        },
        productId:{
            type:Datatypes.STRING,
            allowNULL:false,
        }
    })
  
    
    return PicturesToProducts
}