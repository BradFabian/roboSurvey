import axios from "axios";
const APIURL = "/api/evaluations";
const queryScores = "/";
export default {
  //Gets all scores
  getScores: function() {
    return axios.get(APIURL + queryScores);
  }
};
