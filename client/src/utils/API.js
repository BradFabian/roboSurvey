import axios from "axios";

export default {

  /***** U S E R S ******/

  // List all users
  getAllUsers: function() {
    return axios.get("/api/users");
  },
  // List one user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  //Creates one user
  addUser: function(user) {
    return axios.post("/api/users", user);
  },
  //Update a user with the given id
  updateUser: function(id, user) {
    return axios.put("/api/users/" + id, user);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },

  /****** S U R V E Y S ********/

  // List all surveys
  getAllSurveys: function() {
    return axios.get("/api/surveys");
  },
  // List one survey with the given id
  getSurvey: function(id) {
    return axios.get("/api/surveys/" + id);
  },
  //Creates one survey
  addSurvey: function(survey) {
    return axios.post("/api/surveys", survey);
  },
  //Updates the survey with the given id
  updateSurvey: function(id, survey) {
    return axios.put("/api/surveys/" + id, survey);
  },
  // Deletes the survey with the given id
  deleteUser: function(id) {
    return axios.delete("/api/surveys/" + id);
  },

  /********* E V A L U A T I O N S **********/
  
  // List all evaluations
  getAllEvals: function() {
    return axios.get("/api/evaluations");
  },
  // List one evaluation with the given id
  getEval: function(id) {
    return axios.get("/api/evaluations/" + id);
  },
  //List all evaluations of a given user id
  getUserEval: function(userId) {
    return axios.get("/api/evaluations/user/" + userId);
  },
  //Creates one evaluation
  addEval: function(survey) {
    return axios.post("/api/evaluations", survey);
  },
  //Updates the evaluation with the given id
  updateEval: function(id, survey) {
    return axios.put("/api/evaluations/" + id, survey);
  },
  // Deletes the evaluation with the given id
  deleteEval: function(id) {
    return axios.delete("/api/evaluations/" + id);
  }

};