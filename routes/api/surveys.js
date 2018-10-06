const router = require("express").Router();
const surveyController = require("../../controllers/surveyController");

// Matches with "/api/surveys"
router
  .route("/")
  .get(surveyController.findAll)
  .post(surveyController.create);

// Matches with "/api/surveys/:id"
router
  .route("/:id")
  .get(surveyController.findById)
  .put(surveyController.update)
  .delete(surveyController.remove);

module.exports = router;