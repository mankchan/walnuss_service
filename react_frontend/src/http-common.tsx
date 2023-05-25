import axios from "axios";

export default axios.create({
  baseURL: "http://135.180.243.128:8000/api",
  headers: {
    "Content-type": "application/json"
  }
});
