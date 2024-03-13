import USERS_TYPES from "../types/Users";

export const getUsersRequest = () => ({
  type: USERS_TYPES.GET_USERS_REQUEST,
});

export const getUsersSuccess = (data) => ({
  type: USERS_TYPES.GET_USERS_REQUEST_SUCCESS,
  payload: data,
});

export const createNewUser = ({ firstName, lastName }) => ({
  type: USERS_TYPES.CREATE_NEW_USER,
  payload: {
    firstName,
    lastName,
  },
});

export const deleteUser = (userId) => ({
  type: USERS_TYPES.DELETE_USER,
  payload: { userId },
});
