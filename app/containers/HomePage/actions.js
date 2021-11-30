import {
  GET_USER,
  GET_USER_SUCCESS,
  DEL_USER_SUCCESS,
  DEL_USER,
  ADD_USER,
  ADD_USER_SUCCESS,
} from './constants';

export const getUser = payload => {
  return {
    type: GET_USER,
    payload: payload,
  };
};

export const getUserSuccess = payload => {
  return {
    type: GET_USER_SUCCESS,
    payload: payload,
  };
};
export const delUser = payload => {
  return {
    type: DEL_USER,
    payload: payload,
  };
};

export const delUserSuccess = payload => {
  return {
    type: DEL_USER_SUCCESS,
    payload: payload,
  };
};
export const addUser = payload => {
  return {
    type: ADD_USER,
    payload: payload,
  };
};

export const addUserSuccess = payload => {
  return {
    type: ADD_USER_SUCCESS,
    payload: payload,
  };
};
