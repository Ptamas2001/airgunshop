module.exports = (sequelize, Datatypes)=>{

    const Homeslides = sequelize.define("Homeslides", {
        image:{
            type:Datatypes.STRING,
            allowNULL:false,
        }
    })
  
    
    return Homeslides
}