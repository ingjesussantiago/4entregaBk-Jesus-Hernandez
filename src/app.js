import express, { json, query } from "express"
import { __dirname } from "./utilis.js"
import { managerProducto } from "../managerProducto.js"

const app = express()

const ManagerProducto = new managerProducto(__dirname + "/productos.json")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/productos", async (req, res) => {
    const productos = await ManagerProducto.getProduct()
    res.json({ productos })
})

app.get("/", async (req, res) => {
   const {limite}=req.query
    const productos = await ManagerProducto.getproductolimite(+limite)
    console.log(productos)
    res.json({ productos })

})



app.post("/", async (req, res) => {
    const producto = req.body
    const nuevoProducto = await ManagerProducto.addProduct(producto)
    res.json({ message: "Prodcuto creado", producto: nuevoProducto })
})

app.get("/:idProducto", async (req, res) => {
    const { idProducto } = req.params
    const producto = await ManagerProducto.getProductoById(+idProducto)
    res.json({ producto })
})

app.delete("/", async (req, res) => {
    const message = await ManagerProducto.delateProduct()
    res.json({ message })
})

app.delete("/:idProducto", async (req, res) => {
    const { idProducto } = req.params
    const message = await ManagerProducto.delateProductById(+idProducto)
    res.json({ message })
})

app.put("/:idProducto", async (req, res) => {
    const { idProducto } = req.params
    const productoup = req.body
    const producto = await ManagerProducto.upDateProduc(+idProducto, productoup)
    res.json({ producto })
})






app.listen(8080, () => {
    console.log("escuchando puerto")
})