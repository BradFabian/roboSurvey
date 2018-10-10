const router = require("express").Router();
const userRoutes = require("./users");
const surveyRoutes = require("./surveys");
const evaluationRoutes = require("./evaluations");

//api routes
router.use("/users", userRoutes);               //using route /api/users
router.use("/surveys", surveyRoutes);           //using route /api/surveys
router.use("/evaluations", evaluationRoutes);   //using route /api/evaluations

module.exports = router;
