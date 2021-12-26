import axios from "axios";

export default axios.create({
  baseURL: `${process.env.REACT_APP_GARDEN_API_BASE_URL}${process.env.REACT_APP_PORT}`,
  headers: {
    "Content-type": "application/json",
  },
});
