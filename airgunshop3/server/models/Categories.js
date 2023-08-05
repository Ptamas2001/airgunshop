module.exports = (sequelize, Datatypes)=>{

    const Categories = sequelize.define("Categories", {
        name: {
            type: Datatypes.STRING,
            allowNULL: true,
        },
        image:{
            type:Datatypes.STRING,
            allowNULL:false,
        }
    })
  
    
    return Categories
}