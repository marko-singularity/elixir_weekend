import React from 'react';
import { connect } from 'react-redux';
import Header from './SharedComponents/Header/Header';
import * as logo from './Images/logo.png';
import * as cookie from './cookie';
import Routes from './Routes/Routes';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { t } from 'ttag';

function App(props) {
  const loggedUser = cookie.get('username');
  const history = createBrowserHistory();
  if (props.toast) {
    showToast(props.toast);
  }

  return (
    <Router history={history}>
      <Header
        applicationName={'Donesi lijek'}
        logo={logo}
        logoLink={'/'}
        loggedUser={loggedUser || ''}
        logoutLabel={t`logout`}
      />
      <Routes />
      <ToastContainer position="top-center" autoClose={5000} />
    </Router>
  );
}

const showToast = (toastObject) => {
  switch (toastObject.type) {
    case 'SUCCESS': {
      toast.success(toastObject.message);
      break;
    }
    case 'INFO': {
      toast.info(toastObject.message);
      break;
    }
    case 'ERROR': {
      toast.error(toastObject.message);
      break;
    }
    case 'WARNING': {
      toast.warning(toastObject.message);
      break;
    }
    default: {
      toast(toastObject.message);
    }
  }
};

const mapStateToProps = (state) => {
  return { ...state.applicationReducer };
};

export default connect(mapStateToProps, null)(App);
