import request from "superagent";

export const REQUEST_GIPHYS = "REQUEST_GIPHYS";
export const TRENDING_GIPHYS = "TRENDING_GIPHYS";

const BASE_API_URL = "https://api.giphy.com/v1/gifs/search?q=";
const BASE_TRENDING_URL = "https://api.giphy.com/v1/gifs/trending?limit=10";
const API_KEY = "&api_key=FXwiij56YpJULXpGtoUHGpC9dWpMoCiB";

export function getGiphys(searchText = null) {
  const result = request.get(
    `${BASE_API_URL}${searchText.replace(/\s/g, "+")}${API_KEY}`
  );
  return {
    type: REQUEST_GIPHYS,
    payload: result,
  };
}
export function getTrendingGiphys() {
  document.getElementsByTagName("input")[0].value = "";
  const result = request.get(`${BASE_TRENDING_URL}${API_KEY}`);
  return {
    type: TRENDING_GIPHYS,
    payload: result,
  };
}
