import { all } from "redux-saga/effects";
import usersSagas from "./Users";

function* rootSaga() {
  yield all([...usersSagas]);
}

export default rootSaga;
