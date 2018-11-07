const express = require("express");
const { Router } = express;
const path = require("path")
const Plant = require("../models/plants");
const { upload } = require("../config");

const plantRouter = Router();

plantRouter.route("/")
  .get((req, res, next) => {
    Plant.find({}, (err, plants) => {
      if (err) {
        res.status(400)
        next(err)
      }
      res.status(200).send(plants);
    })
  })
  .post(upload.single("image"), (req, res, next) => {
    req.body.image = req.file;
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
        next(err)
      } else {
        res.status(200).send(editedPlant)
      }
    })
  })
  .delete((req, res, next) => {
    Plant.findByIdAndDelete(req.params.id, (err, deletedPlant) => {
      if (err) {
        res.status(400)
        next(err)
      } else {
        res.status(204).send()
      }
    })
  })

  plantRouter.route("/images/:filename")
    .get((req, res, next) => {
        res.sendFile(path.resolve(__dirname, "../temp/", req.params.filename))
    })

module.exports = plantRouter