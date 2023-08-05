const {verify} =require("jsonwebtoken")


const validateToken = (req,res, next) =>{
    const accesToken = req.header("accesToken"); 
    if (!accesToken) return res.json({error: "User not logged in"})

    try{
        const validToken = verify(accesToken, "Importantsecret")
        req.user = validToken 
        if(validToken) {
            return next()
        }

    } catch (err){
     return res.json("hiba")
    }

}
module.exports= {validateToken}