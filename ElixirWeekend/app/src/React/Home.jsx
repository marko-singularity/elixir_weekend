import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const Home = (props) => {
  return <div></div>;
};

const mapStateToProps = (state) => {
  return { ...state.applicationReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {},
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
