const cookieParser = require('cookie-parser')
const express = require('express');
const cors = require('cors')


const applyMiddlewere = (app) => {
    app.use(cookieParser())
    app.use(express.json())
    app.use(cors({
      credentials: true,
      origin: ['http://127.0.0.1:5173', " https://parcel-lime.vercel.app", "https://wasteful-fruit.surge.sh", "http://localhost:5173"]
    }))
}

module.exports = applyMiddlewere