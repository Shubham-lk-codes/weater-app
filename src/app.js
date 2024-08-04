const express = require("express");
const path = require("path")
const hbs = require("hbs")
const app = express()

const port = process.env.PORT || 3000

const staticPath = path.join(__dirname, "../public")
const tempPath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")



app.use(express.static(staticPath))
app.use(express.static(tempPath))
hbs.registerPartials(partialPath)

app.set("view engine","hbs")
app.set("views",tempPath)
app.set("partials",partialPath)
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404",{
        errmsg:"Opps! page was not found"
    })
    
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})