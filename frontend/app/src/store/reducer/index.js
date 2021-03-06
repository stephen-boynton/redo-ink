import update from "immutability-helper";
import { DRAFT_POST, SIGN_UP, LOGIN } from "../constants.js";

const initialState = {
  mainPagePosts: {
    featuredBlog: {},
    featuredComments: [],
    latestBlog: {},
    recentPosts: []
  },
  draftPost: [],
  archive: [],
  user: "",
  signedUp: ""
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return update(state, {
        signedUp: { $set: action.payload }
      });
    case LOGIN:
      return update(state, {
        user: { $set: action.payload }
      });
    default:
      return state;
  }
};

export default reducer;
