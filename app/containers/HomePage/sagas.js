import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { DEL_USER, GET_USER, ADD_USER, EDIT_USER } from './constants';
import { getUserSuccess, addUserSuccess, editUserSuccess } from './actions';
import { getData } from './Api';
let newdata;
let newdata2;
let id = '';
function* fetchUser() {
  try {
    const data = yield call(getData);
    yield put(getUserSuccess(data));
  } catch (error) {
    console.log('error');
  }
}
async function delUser() {
  await axios
    .delete(`https://60c97304772a760017203839.mockapi.io/api/users/${id}`)
    .then(response => {
      console.log(response);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

function* fetchDelUser(action) {
  console.log(action.payload);
  id = action.payload;
  yield call(delUser);

  try {
    const data = yield call(getData);
    yield put(getUserSuccess(data));
  } catch (error) {
    console.log('error');
  }
}
// Add User
async function addUser() {
  await axios
    .post('https://60c97304772a760017203839.mockapi.io/api/users/', newdata)
    .then(response => {
      console.log(response);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

function* fetchAddUser(action) {
  newdata = action.payload;
  console.log('newdata', newdata);
  addUser();
  try {
    const data = yield call(getData);
    yield put(getUserSuccess(data));
  } catch (error) {
    console.log('error');
  }
}

// Edit
async function editUser() {
  await axios
    .put(
      `https://60c97304772a760017203839.mockapi.io/api/users/${id}`,
      newdata2,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

function* fetchEditUser(action) {
  newdata2 = action.payload;
  id = action.payload.id;
  console.log('newdata2', newdata2);
  editUser();
  try {
    const data = yield call(getData);
    yield put(editUserSuccess(data));
  } catch (error) {
    console.log('error');
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_USER, fetchUser);
  yield takeEvery(DEL_USER, fetchDelUser);
  yield takeEvery(ADD_USER, fetchAddUser);
  yield takeEvery(EDIT_USER, fetchEditUser);
}
