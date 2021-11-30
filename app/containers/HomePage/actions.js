import {
  GET_USER,
  GET_USER_SUCCESS,
  DEL_USER_SUCCESS,
  DEL_USER,
  ADD_USER,
  ADD_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_SUCCESS,
} from './constants';

export const getUser = payload => ({
  type: GET_USER,
  payload,
});

export const getUserSuccess = payload => ({
  type: GET_USER_SUCCESS,
  payload,
});
export const delUser = payload => ({
  type: DEL_USER,
  payload,
});

export const delUserSuccess = payload => ({
  type: DEL_USER_SUCCESS,
  payload,
});
export const addUser = payload => ({
  type: ADD_USER,
  payload,
});

export const addUserSuccess = payload => ({
  type: ADD_USER_SUCCESS,
  payload,
});
export const editUser = payload => ({
  type: EDIT_USER,
  payload,
});

export const editUserSuccess = payload => ({
  type: EDIT_USER_SUCCESS,
  payload,
});
