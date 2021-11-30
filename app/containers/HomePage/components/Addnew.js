import React, { useEffect, memo, useState } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectUser } from '../selectors';
import reducer from '../reducer';
import saga from '../sagas';
import PropTypes from 'prop-types';
import { addUser } from '../actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
const key = 'home';

export const Addnew = ({ user, addUsers }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });
  return (
    <form>
      Name :
      <input
        onChange={e =>
          setData({
            ...data,
            name: e.target.value,
          })
        }
      />
      <br />
      Email :
      <input
        onChange={e =>
          setData({
            ...data,
            email: e.target.value,
          })
        }
      />
      <br />
      Phone :
      <input
        onChange={e =>
          setData({
            ...data,
            phone: e.target.value,
          })
        }
      />
      <br />
      Website :
      <input
        onChange={e =>
          setData({
            ...data,
            website: e.target.value,
          })
        }
      />
      <br />
      <button
        onClick={e => {
          e.preventDefault();
          addUsers(data);
          history.back();
        }}
      >
        Submit
      </button>
    </form>
  );
};
Addnew.propTypes = {
  user: PropTypes.array,
  addUsers: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});
export function mapDispatchToProps(dispatch) {
  return {
    addUsers: data => dispatch(addUser(data)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  memo,
)(Addnew);
