import 'dotenv/config'
import express,{  request, response } from "express";
import cors from 'cors'

import conn from "./config/conn.js";

import blogModel from './Models/blogsModel.js'

import blogsRouter from './Routes/blogsRouter.js'


const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

conn.sync().then(()=>{
    app.listen(PORT, () =>{
        console.log(`Servidor on http://localhost:${PORT}`)
    })
})

app.use("/", blogsRouter )

app.use((request, response)=>{
    response.status(404).json({message:"Rota não encontrada"})
})