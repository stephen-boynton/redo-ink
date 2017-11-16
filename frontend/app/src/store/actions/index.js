import { DRAFT_POST, LOGIN, SIGN_UP } from "../constants";

const makeActionCreator = function(actionType) {
  return function(payload) {
    return {
      type: actionType,
      payload: payload
    };
  };
};

export const draftPost = makeActionCreator(DRAFT_POST);
export const login = makeActionCreator(LOGIN);
export const signUp = makeActionCreator(SIGN_UP);
