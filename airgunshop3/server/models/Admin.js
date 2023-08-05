

module.exports = (sequelize, Datatypes)=>{

    const Admin = sequelize.define("Admin", {
        username: {
            type: Datatypes.STRING,
            allowNULL: true,
        },
        profilePicture:{
            type: Datatypes.STRING,
            allowNULL: true,
        },
        name: {
            type: Datatypes.STRING,
            allowNULL: false,
        },
        mobile: {
            type: Datatypes.STRING,
            allowNULL:true,
        },
        password: {
            type:Datatypes.STRING,
            allowNULL:false,
        },
        birthDate: {
            type:Datatypes.DATE,
            allowNULL:false,
        },


        
       
        
        
    })
  
    
    return Admin
}