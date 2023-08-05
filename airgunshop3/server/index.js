const express = require('express')
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
 
const db = require('./models')

// Routers

const postRouter = require('./routes/Posts')
app.use("/post", postRouter);

const categoriesRouter = require('./routes/Categories')
app.use("/categories", categoriesRouter);

const productRouter = require('./routes/Product')
app.use("/product", productRouter);

const userRouter = require('./routes/Users')
app.use("/users", userRouter);

const adminRouter = require('./routes/Admin')
app.use("/admin", adminRouter);

const PicturesToProductsRouter = require('./routes/PicturesToProducts')
app.use("/productpicture", PicturesToProductsRouter);

const HomeSlideshow = require('./routes/HomeSlideshow')
app.use("/homeslides", HomeSlideshow);

const HomeParts = require('./routes/HomeParts')
app.use("/homeparts", HomeParts);

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log("A szervera 3001-es porton  fut");
    });
});

