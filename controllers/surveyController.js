const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Survey
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findById: function(req, res) {
        db.Survey
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    create: function(req, res) {
        db.Survey
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    update: function(req, res) {
        db.Survey
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    remove: function(req, res) {
        db.Survey
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }

}