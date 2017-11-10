import update from "immutability-helper";
import {
  DRAFT_POST
} from "../constants.js";

const initialState = {
  mainPagePosts: {
    featuredBlog: {},
    featuredComments: [],
    latestBlog: {},
    recentPosts: []
  },
  draftPost: [],
  archive: [],
  user: {}
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case DRAFT_POST
    default:
      return state;
  }
};

export default reducer;
