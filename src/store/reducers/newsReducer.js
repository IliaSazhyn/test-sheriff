import { GET_NEWS } from "../types";

const initialState = {
  news: [],
  loading: true,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default newsReducer;
