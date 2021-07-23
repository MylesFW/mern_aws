const Pet = require("../models/pet.model");

module.exports = {
    create: function (req, res) {

        Pet.create(req.body)
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },


    getAll(req, res) {
        console.log("getAll method executed")

        Pet.find()
        .then((pets) => {
            res.json(pets);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params)

        Pet.findById(req.params.id)
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err); // .status(400) <- invalid path
            });
    },


    delete(req, res) {
        console.log("delete method executed", "url params", req.params)

        Pet.findByIdAndDelete(req.params.id)
        .then((pet) => {
        res.json(pet);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },


    update(req, res) {
        console.log("update method executed", "url params", req.params)

        Pet.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true //return the newly updated model
        })
            .then((updatedPet) => {
            res.json(updatedPet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
}