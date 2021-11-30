import React, { useEffect, memo } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import saga from '../sagas';
import reducer from '../reducer';
import { makeSelectUser } from '../selectors';
const key = 'home';

export const userDetails = ({ user }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const idUser = JSON.parse(localStorage.getItem('idUser'));
  console.log(user[idUser]);
  return (
    <div>
      {user
        ? user.map(item => {
            if (item.id == idUser)
              return (
                <ul>
                  <li>{item.id}</li>
                  <li>{item.name}</li>
                  <li>{item.website}</li>
                  <input value={item.phone} />
                </ul>
              );
          })
        : ''}
    </div>
  );
};

userDetails.propTypes = {
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
)(userDetails);
