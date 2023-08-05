module.exports = (sequelize, Datatypes)=>{

    const HomeParts = sequelize.define("HomeParts", {
        viewedproducttitle: {
            type: Datatypes.STRING,
            allowNULL: false,
        },
        viewedproductdescription: {
            type: Datatypes.TEXT,
            allowNULL: false,
        },
        viewedproductname: {
            type: Datatypes.STRING,
            allowNULL: false,
        },
        viewedproductprice: {
            type: Datatypes.INTEGER,
            allowNULL: false,
        },
        
        viewedproductimage:{
            type:Datatypes.STRING,
            allowNULL:false,
        },
        viewedproductpower: {
            type: Datatypes.STRING,
            allowNULL: false,
        },
        viewedproducttitle: {
            type: Datatypes.STRING,
            allowNULL: false,
        },
        viewedproductbarel: {
            type: Datatypes.INTEGER,
            allowNULL: false,
        },
        viewedproductcal: {
            type: Datatypes.INTEGER,
            allowNULL: false,
        },
        viewedproducttrigenrinf: {
            type: Datatypes.STRING,
            allowNULL: false,
        },
        viewedproductstockinf: {
            type: Datatypes.STRING,
            allowNULL: false,
        },
        viewedproductscopeinf: {
            type: Datatypes.STRING,
            allowNULL: false,
        },
        tocustomerstitle: {
            type: Datatypes.STRING,
            allowNULL: false,
        },
        tocustomersdescription: {
            type: Datatypes.TEXT,
            allowNULL: false,
        },
        tocustomersimg: {
            type: Datatypes.STRING,
            allowNULL: true,
        },


    })
  
    
    return HomeParts
}