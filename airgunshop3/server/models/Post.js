module.exports = (sequelize, Datatypes)=>{

    const Post = sequelize.define("Post", {
        title: {
            type: Datatypes.STRING,
            allowNULL: true,
        },
        postText: {
            type: Datatypes.STRING,
            allowNULL: true,
        },
        username: {
            type: Datatypes.STRING,
            allowNULL: true,
        },
        like: {
            type: Datatypes.STRING,
            allowNULL: true,
        },
        img:{
            type: Datatypes.STRING,
            allowNULL: true,
        },
        type: {
            type: Datatypes.STRING,
            allowNULL: true,
        }
    })
  
    
    return Post
}