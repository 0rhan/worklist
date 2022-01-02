import Axios from "axios";
import { BASE_URL } from "../config/constants";

const axios = Axios.create({
  baseURL: BASE_URL,
});

export default axios;
