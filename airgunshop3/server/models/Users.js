

module.exports = (sequelize, Datatypes)=>{

    const User = sequelize.define("User", {
        username: {
            type: Datatypes.STRING,
            allowNULL: true,
        },
        profilePicture:{
            type: Datatypes.STRING,
            allowNULL: true,
        },
        isAdmin : {
            type:Datatypes.BOOLEAN,
            defaultValue:false,
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
  
    
    return User
}