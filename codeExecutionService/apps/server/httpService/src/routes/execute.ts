import cors from "cors"
import express from "express"
const app = express()

app.use(cors())
app.use(express.json())

app.post("/execute", async(req,res)=>{
    const code = req.body.code

    console.log(code)

    return res.json({
        success:true,
        output:"Hello from Backend"
    })
})

app.listen(3001,()=>{
    console.log("HTTP Server listing on PORT 3001")
})
