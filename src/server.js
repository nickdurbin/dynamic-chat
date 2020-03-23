const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const morgan = require('morgan')


// Server instance
const server = express()

// Middleware
server.use(morgan('dev'))
server.use(helmet())
server.use(cors())

server.get("/", (req, res, next) => {
  res.status(200).json({ message: "Server is up and running." })
})

server.use((req, res, next) => {
  res.status(404).json({ message: "You have gone to an invalid address. Please try again."})
})

server.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "Pancakes" : error.stack
  });
  next()
})

module.exports = server;