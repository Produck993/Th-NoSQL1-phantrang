import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import productRouter from "./src/router/routes";


const PORT = 3000;
const app = express();

app.set("view engine" , "ejs");
app.set("views", "./src/views")

const DB_URL = 'mongodb://localhost:27017/product_manager';
mongoose.connect(DB_URL)
.then(()=> {
    console.log(`DB Connected!`)
})
.catch(error => {
    console.log(`DB connection error`,error.message);
})

app.use(bodyParser.json());
app.use('/product', productRouter)

app.listen(PORT,()=> {
    console.log(`Server is running on port : ` + PORT);
    
})