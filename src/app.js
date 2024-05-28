const express=require('express');
const path =require('path')
const hbs=require('hbs');
const app=express()
const port =3001
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,"../templates/views"))
hbs.registerPartials(path.join(__dirname,"../templates/partials"))
app.use(express.static(path.join(__dirname,"../public")))


app.get("/home",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('404error',{
        errorMsg:"404 page not found"
    })
})




app.listen(port,()=>{
    console.log(`listening on the port http://localhost:${port}`)
})

