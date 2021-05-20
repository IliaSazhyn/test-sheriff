import { GET_NEWS, NEWS_ERROR } from "../types";
import axios from "axios";

export const getNews = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`
    );
    dispatch({
      type: GET_NEWS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: NEWS_ERROR,
      payload: console.log(e),
    });
  }
};
