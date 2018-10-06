const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Evaluation
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findById: function(req, res) {
        db.Evaluation
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    create: function(req, res) {
        db.Evaluation
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    update: function(req, res) {
        db.Evaluation
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    remove: function(req, res) {
        db.Evaluation
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }

}