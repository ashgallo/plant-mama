const express = require("express");
const { Router } = express;
const Plant = require("../models/plants");

const plantRouter = Router();

plantRouter.route("/")
  .get((req, res, next) => {
    Plant.find({}, (err, plants) => {
      if(err) {
        res.status(400)
        next (err)
      }
      res.status(200).send(plants);
    })
  })  
  .post((req, res, next) => {
    const newPlant = new Plant(req.body);
    newPlant.save((err, savedPlant) => {
      if (err) next(err);
      else res.status(201).send(savedPlant);
    })
  })

plantRouter.route("/:id")
  .get((req, res, next) => {
    Plant.findById(req.params.id, (err, foundPlant) => {
      if (err) {
        res.status(400)
        next
      } else {
        res.status(200).send(foundPlant)
      }
    })
  })
  .put((req, res, next) => {
    Plant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, editedPlant) => {
      if (err) {
        res.status(400)
        next (err)
      } else {
        res.status(200).send(editedPlant)
      }
    })
  })
  .delete((req, res, next) => {
    Plant.findByIdAndDelete(req.params.id, (err) => {
      if (err) {
        res.status(400)
        next (err)
      } else {
        res.status(204).send()
      }
    })
  })

module.exports = plantRouter