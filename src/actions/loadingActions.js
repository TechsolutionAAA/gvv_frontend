import { GET_LANGLOADING_DATA, GET_LOADING_DATA } from "./constants";

// handle loading variable
export const handleLoading = (flag) => (dispatch) => {
  dispatch({
    type: GET_LOADING_DATA,
    payload: flag,
  });
};

// handle language loading variable
export const handleLangLoading = (flag) => (dispatch) => {
  dispatch({
    type: GET_LANGLOADING_DATA,
    payload: flag,
  });
};
