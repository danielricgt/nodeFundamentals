import axios from "axios";
import { PostHttp, PutHttp } from "../interfaces/http-client.interface";
export const httpClientPlugin = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  },

  post: async (url: string, body: PostHttp) => {

    throw new Error ('not implemented yet')
  },

  put: async (url: string, body: PutHttp) => {
    throw new Error ('not implemented yet')
  },

  delete: async (url: string) => {
    throw new Error ('not implemented yet')
  },
};


