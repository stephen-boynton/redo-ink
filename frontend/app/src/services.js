import { signUp, login } from "./store/actions";
import axios from "axios";

export function signUpService(newUser) {
  return dispatch => {
    axios.post("/users/signup", newUser).then(response => {
      dispatch(signUp(response));
    });
  };
}

export function loginService(loginInfo) {
  return dispatch => {
    axios.post("/users/login", loginInfo).then(response => {
      dispatch(login(response));
    });
  };
}
