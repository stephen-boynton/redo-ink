import { DRAFT_POST, SIGN_IN, SIGN_UP } from "../constants";

const makeActionCreator = function(actionType) {
  return function(payload) {
    return {
      type: actionType,
      payload: payload
    };
  };
};

export const draftPost = makeActionCreator(DRAFT_POST);
export const signIn = makeActionCreator(SIGN_IN);
export const signUp = makeActionCreator(SIGN_UP);
