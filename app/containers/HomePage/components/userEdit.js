import React, { useEffect, memo, useState } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from '../selectors';
import reducer from '../reducer';
import saga from '../sagas';
import { editUser } from '../actions';
const key = 'home';

export const userEdit = ({ user, editUsers }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const index = JSON.parse(localStorage.getItem('index'));
  const idUser = JSON.parse(localStorage.getItem('idUser'));

  const item = user[index];
  const [data, setData] = useState({
    id: idUser,
    name: item.name,
    email: item.email,
    phone: item.phone,
    website: item.website,
  });
  console.log(data);
  return (
    <form>
      Name :
      <input
        value={data.name}
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
        value={data.email}
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
        value={data.phone}
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
        value={data.website}
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
          editUsers(data);
          history.back();
        }}
      >
        Save
      </button>
    </form>
  );
};
userEdit.propTypes = {
  user: PropTypes.array,
};
const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});
export function mapDispatchToProps(dispatch) {
  return {
    editUsers: data => dispatch(editUser(data)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  memo,
)(userEdit);
