import { GET_USERS } from "./action";

const reducer = (state, action) => {
  if (action.type === GET_USERS) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  throw new Error(`no such action :${action.type}`);
};

export default reducer;
