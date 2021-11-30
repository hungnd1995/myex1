import React, { useEffect, memo, useState } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectUser } from '../selectors';
import reducer from '../reducer';
import saga from '../sagas';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
const key = 'home';

export const userEdit = ({ user }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const idUser = JSON.parse(localStorage.getItem('idUser'));
  const [state, setstate] = useState(initialState);
  const changeName = e => {};
  return (
    <div>
      {user
        ? user.map(item => {
            if (item.id == idUser)
              return (
                <form>
                  <input value={item.id} />
                  <input value={item.name} onChange={() => changeName(e)} />
                </form>
              );
          })
        : ''}
    </div>
  );
};

userEdit.propTypes = {
  getUsers: PropTypes.func,
  user: PropTypes.array,
};
const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});
export function mapDispatchToProps(dispatch) {
  return {};
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  memo,
)(userEdit);
