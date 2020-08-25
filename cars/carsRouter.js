const express = require("express")
const knex = require("knex")
const db = require("../data/config");


const router = express.Router()

router.get("/cars", async (req,res,next) => {
    try{
        res.json(await db("cars"))
    }catch(err){
        next(err)
    }
});

router.post("/cars", async (req,res,next) => {
    try{//this will insert the new car 
        const [id] = await db("cars").insert(req.body)
        //this will return the car that was just created so it can be sent as a response 
        const newCar = await db("cars").where({ id }).first()
        res.status(201).json(newCar)
    }catch(err){
        next(err)
    }
});

router.get("/cars/:id", async (req,res,next) => {
    try{
        const { id } = req.params
        const car = await db("cars").where({ id }).first()
        res.json(car)
    }catch(err){
        next(err)
    }
});

router.put("/cars/:id", async (req,res,next) => {
    try{//this creates a new object to be added to the array
        await db("cars").update({
            VIN: req.body.VIN,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            title: req.body.title
        })
        //this gets the newly created car object 
        .where("id", req.params.id)
        //this will return the newly created car object so it can be sent for confirmation that it was created
        const car = await db("cars")
        .where("id", req.params.id)
        .first()
        res.json(car)
    }catch(err){
        next(err)
    }
});

router.delete("/cars/:id", async (req,res,next) => {
    try{
        await db("cars")
        .where("id", req.params.id)
        .del()
        res.status(204).end()
    }catch(err){
        next(err)
    }
})

module.exports = router