import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/ecom-xps-b7832/us-central1/api",
});

export default instance;
