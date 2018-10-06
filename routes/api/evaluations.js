const router = require("express").Router();
const evalController = require("../../controllers/evaluationController");

// Matches with "/api/evaluations"
router
  .route("/")
  .get(evalController.findAll)
  .post(evalController.create);

// Matches with "/api/evaluations/:id"
router
  .route("/:id")
  .get(evalController.findById)
  .put(evalController.update)
  .delete(evalController.remove);

// Matches with "/api/evaluations/user/:userId"  

router
    .route("/user/:id")
    .get(evalController.findByUser);

module.exports = router;