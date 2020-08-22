const express = require("express");
const carsRouter = require("./cars/carsRouter");

const server = express()
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(logger)
server.use(carsRouter);

function logger(req, res, next) {
    console.log(`${new Date().toISOString()}  ${req.ip} ${req.method}  ${req.url}`);
  
    next()
  };

  server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({ message: "Something went wrong"})
})

server.listen(5000, () => {
    console.log(`API listening on port ${port}`)
});