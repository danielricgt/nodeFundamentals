import axios from "axios";
import { PostHttp, PutHttp } from "../interfaces/http-client.interface";
export const httpClientPlugin = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  },

  post: async (url: string, body: PostHttp) => {},

  put: async (url: string, body: PutHttp) => {},

  delete: async (url: string) => {},
};

