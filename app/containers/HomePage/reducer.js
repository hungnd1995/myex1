import { GET_USER_SUCCESS } from './constants';

export const initialState = { user: [] };
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      const data = action.payload.data;
      return { user: data };
    default:
      return state;
  }
};

export default homeReducer;
