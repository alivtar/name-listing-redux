import {
  call,
  takeEvery,
  fork,
  put,
  takeLatest,
  take,
} from "redux-saga/effects";
import * as api from "api/Users";
import USERS_TYPES from "components/types/Users";
import { getUsersSuccess } from "components/actions/Users";

function* getUsersData() {
  try {
    const result = yield call(api.getUsers);
    yield put(getUsersSuccess(result.data));
  } catch (e) {
    console.error("e", e);
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(USERS_TYPES.GET_USERS_REQUEST, getUsersData);
}

function* createNewUser(action) {
  try {
    yield api.createUser({
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    });
    yield call(getUsersData);
  } catch (e) {
    console.error("E", e);
  }
}

function* watchCreateNewUser() {
  yield takeLatest(USERS_TYPES.CREATE_NEW_USER, createNewUser);
}

function* deleteUser({ userId }) {
  try {
    yield api.deleteUser(userId);
    yield call(getUsersData);
  } catch (e) {}
}

function* watchDeleteUser() {
  while (true) {
    const action = yield take(USERS_TYPES.DELETE_USER);
    yield call(deleteUser, { userId: action.payload.userId });
  }
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateNewUser),
  fork(watchDeleteUser),
];

export default usersSagas;
