import axios from "axios";
import { config } from "../configs";

export function getData(url, searchQuery, page) {
  return axios.get(
    `${config.api_url}/${url}?${searchQuery}&per_page=10&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${config.api_token}`,
      },
    }
  );
}
