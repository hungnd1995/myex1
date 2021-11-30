import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import Button from '@material-ui/core/Button';
import { AirlineSeatIndividualSuiteRounded } from '@material-ui/icons';
import { yellow } from '@material-ui/core/colors';
import { delUser, getUser } from '../actions';
import saga from '../sagas';
import reducer from '../reducer';
import { makeSelectUser } from '../selectors';

const key = 'home';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Table1 = ({ user, getUsers, delUsers }) => {
  const classes = useStyles();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const handleIdUser = (index, idUser) => {
    localStorage.setItem('index', index);
    localStorage.setItem('idUser', idUser);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          getUsers();
        }}
      >
        GetData
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/addNew" style={{ textDecoration: 'none', color: 'white' }}>
          Add New
        </Link>
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Detail </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user !== undefined &&
              user.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.website}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary">
                      <Link
                        to="/userDetails"
                        style={{ color: 'white', textDecoration: 'none' }}
                        onClick={() => handleIdUser(row.id)}
                      >
                        Link
                      </Link>
                    </Button>
                    <Button variant="contained" style={{ background: 'green' }}>
                      <Link
                        to="/userEdit"
                        style={{
                          color: 'white',
                          textDecoration: 'none',
                        }}
                        onClick={() => handleIdUser(index, row.id)}
                      >
                        Edit
                      </Link>
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      startIcon={<DeleteIcon />}
                      onClick={() => delUsers(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

Table1.propTypes = {
  getUsers: PropTypes.func,
  user: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});
export function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => {
      dispatch(getUser());
    },
    delUsers: id => {
      dispatch(delUser(id));
    },
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  memo,
)(Table1);
