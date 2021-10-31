import axios from "axios";
import { config } from "./constants";

const request = {
   get: (path: string) => {
      return axios.get(path, config);
   },
};

export default request;
