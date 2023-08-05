module.exports = (sequelize, Datatypes)=>{

    const Product = sequelize.define("Product", {
        name: {
            type: Datatypes.STRING,
            allowNULL: true,
        },
        image:{
            type:Datatypes.STRING,
            allowNULL:false,
        },
        price:{
            type:Datatypes.STRING,
            allowNULL:false,
        },
        quantity:{
            type:Datatypes.STRING,
            allowNULL:false,
        },
        shipingleft:{
            type:Datatypes.STRING,
            allowNULL:false
        },
        descryption:{
            type:Datatypes.STRING,
            allowNULL:false,
        },
        categoryId:{
            type:Datatypes.STRING,
            allowNULL:false,
        },
        calyber:{
            type:Datatypes.INTEGER,
            allowNULL:true,
        },
        weight:{
            type:Datatypes.INTEGER,
            allowNULL:true,
        },
        brand:{
            type:Datatypes.INTEGER,
            allowNULL:true,
        }

    })
  
    
    return Product
}