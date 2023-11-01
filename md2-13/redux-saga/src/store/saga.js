import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setStudents } from "./users";

const fetchListStudent = () => {
  return axios.get("http://localhost:3000/users");
};

function* getStudentList() {
  const res = yield call(fetchListStudent);
  yield put(setStudents(res.data));
}

function* rootSaga() {
  yield takeEvery("user/getStudent", getStudentList);
}

export default rootSaga;
