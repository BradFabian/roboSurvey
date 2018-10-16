import axios from "axios";
const APIURL = "/api/evaluations";
const queryScores = "/scores";
export default {
  //Gets all scores
  getScores: function() {
    return axios.get(APIURL + queryScores);
  }
};
