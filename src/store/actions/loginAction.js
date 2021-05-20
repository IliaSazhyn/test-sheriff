import { USER_LOGIN, USER_LOGOUT, USER_ERROR } from "../types";

export const getUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN,
      payload: user,
    });
  } catch (e) {
    dispatch({
      type: USER_ERROR,
      payload: console.log(e),
    });
  }
};

export const clearUser = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
};
