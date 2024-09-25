import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import db from "./config/db.js"
import morgan from "morgan";
import UserRouter from "./routes/user.route.js";
import CategoryRouter from "./routes/category.route.js";
import ProductRouter from "./routes/product.route.js";

dotenv.config()

const app=express()

//database
db()

//PORT
const PORT=process.env.PORT

//


//router 
app.get('/',(req,res)=>{
    res.send("HELLO WORLD")

})
//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routers
app.use("/api/user", UserRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/products", ProductRouter);



//server start 
app.listen(PORT,()=>{
   console.log( `server is connected ${PORT}`)
})