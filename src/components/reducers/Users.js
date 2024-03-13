import USERS_TYPES from "../types/Users";

const INITIAL_STATE = {
  items: [],
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_TYPES.GET_USERS_REQUEST_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
