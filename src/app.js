import express from "express"
import{__direname} from "./utilis.js"

const app =express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("desde app")
})

app.listen(8080,()=>{
    console.log("escuchando puerto")
})