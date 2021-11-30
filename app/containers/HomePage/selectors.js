import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUser = state => state.home || initialState;

const makeSelectUser = () =>
  createSelector(
    selectUser,
    homeState => homeState.user,
  );

export { selectUser, makeSelectUser };
