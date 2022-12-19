import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com/?s=inception&apikey=9ecd1edd",
});
