import express from "express";
import ViteExpress from 'vite-express'
import morgan from "morgan";
import axios from "axios";
import handlerFunctions from "./controller.js";

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())


app.get('/', handlerFunctions.sendCarData)
app.post('/addCar', handlerFunctions.addCar)
app.put('/editCar/:id', handlerFunctions.editCar)
app.delete('/deleteCar/:id', handlerFunctions.deleteCar)

ViteExpress.listen(app, 6969, () => console.log('listening on http://localhost:6969... haha nice'))