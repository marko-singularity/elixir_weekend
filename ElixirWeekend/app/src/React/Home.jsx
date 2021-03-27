import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import * as logo from '../Images/pharmacy.jpg';
import { Helmet } from 'react-helmet';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import * as applicaitonActions from '../Redux/Application/applicationActions';

const Home = (props) => {
  useEffect(() => {
    props.actions.onChange({ id: 'headerBackgroundColor', value: '#FFFFFF' });
    props.actions.onChange({ id: 'headerColor', value: '#4891A0' });
  }, []);
  const imageStyle = {
    position: 'absolute',
    width: '40%',
    height: '90vh',
    right: '65%',
    top: '37vh',
    border: '6px solid white',
    borderRadius: '100%',
  };
  const regFormStyle = {
    position: 'absolute',
    width: '30%',
    height: '60vh',
    left: '60%',
    top: '39vh',
  };

  const inputStyle = {
    width: '70%',
    height: '35px',
    fontSize: '20px',
    borderRadius: '10px',
    backgroundColor: 'white',
    border: 'none',
  };
  return (
    <div className="application">
      <Helmet>
        <style>{'body { background-color: #3D8392 }'}</style>
      </Helmet>
      <img src={logo} style={imageStyle} alt="" />
      <div style={{ marginTop: '5vh', display: 'inline-block' }}>
        <input
          placeholder="Potrazi lijek"
          style={{
            ...inputStyle,
            textAlign: 'center',
            color: '#3D8392',
            width: '600px',
          }}
        />
      </div>
      <span style={{ fontSize: '30px', color: 'white' }}> ILI VOLONTIRAJ </span>
      <div style={regFormStyle}>
        <div style={{ border: '1px solid white', borderRadius: '5%' }}>
          <Grid
            container
            direction="column"
            spacing={2}
            style={{ margin: '10%' }}
          >
            <Grid item>
              <input placeholder="Ime" style={inputStyle} />
            </Grid>
            <Grid item>
              <input placeholder="Prezime" style={inputStyle} />
            </Grid>
            <Grid item>
              <input placeholder="Email" style={inputStyle} />
            </Grid>
            <Grid item>
              <input placeholder="Lozinka" style={inputStyle} />
            </Grid>
            <Grid item>
              <Button
                color="inherit"
                style={{
                  width: '70%',
                  height: '35px',
                  color: 'white',
                  border: '1px solid',
                  borderColor: 'white',
                  borderRadius: '10px',
                }}
              >
                Registruj se
              </Button>
            </Grid>
          </Grid>
        </div>
        <p style={{ marginLeft: '30%' }}> REGISTRACIJA APOTEKE</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.applicationReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      onChange: bindActionCreators(applicaitonActions.onChange, dispatch),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
