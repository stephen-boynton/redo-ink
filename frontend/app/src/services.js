import { signUp } from "./store/actions";
import axios from "axios";

export function signUpService(newUser) {
  return dispatch => {
    axios.post("/users/signup", newUser).then(response => {
      console.log(response);
    });
  };
}
