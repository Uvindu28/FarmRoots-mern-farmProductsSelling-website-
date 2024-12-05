import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8800/api", // Replace with your backend URL
  withCredentials: true, // To include cookies in requests
});

export default instance;
