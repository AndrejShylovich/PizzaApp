import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const responce = await axios.post(
      "http://localhost:8000/api/users/register",
      user
    );
    console.log(responce);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const responce = await axios.post(
      "http://localhost:8000/api/users/login",
      user
    );
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: responce.data });
    localStorage.setItem("currentUser", JSON.stringify(responce.data));
    window.location.href='/'
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }

};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};
