const express = require("express")
const productosRoutes = require("./api/productos");
const cartsRoutes = require("./api/cart");

const app = express()

//midelwars de aplicacion
app.use(express.json())
app.use(express.urlencoded({extended:false}))//para decodificar la url .



app.set("view engine" ,"ejs")
app.set("views","./views")
app.use("/api/productos",productosRoutes);
app.use("/api/cart",cartsRoutes);


app.listen(8080,()=>{
    console.log("server ok")
})