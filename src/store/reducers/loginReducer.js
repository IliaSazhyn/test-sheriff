import { USER_LOGIN, USER_LOGOUT } from "../types";

const initialState = {
  user: [],
  isAuthenticate: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticate: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: [],
        isAuthenticate: false,
      };
    default:
      return state;
  }
};

export default newsReducer;
