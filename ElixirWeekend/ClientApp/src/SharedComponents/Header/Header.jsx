import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const imageStyle = { width: '2.5rem', height: '2rem', margin: '0.3125rem' };
const Header = (props) => {
  const classes = useStyles();
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const inputStyle = {
    width: '70%',
    height: '35px',
    fontSize: '20px',
    borderRadius: '10px',
    backgroundColor: 'white',
    border: 'none',
  };
  const regFormStyle = {
    position: 'absolute',
    width: '30%',
    height: '60vh',
    left: '60%',
    top: '39vh',
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: props.headerBackgroundColor,
          color: props.headerColor,
          fontFamily: 'Roboto',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <a href={props.logoLink}>
              <img src={props.logo} style={imageStyle} alt="" />
            </a>
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ fontSize: '50px', lineHeight: '100px' }}
          >
            Elixir.ba
          </Typography>
          {props.headerBackgroundColor == '#FFFFFF' ? (
            <Button
              color="inherit"
              style={{
                width: '259.08px',
                height: '35px',
                color: '#3D8392',
                border: '1px solid',
                borderColor: '#3D8392',
                borderRadius: '10px',
                boxShadow: '5px 10px #FFFFFF',
              }}
              onClick={() => {
                setLoginFormOpen(true);
              }}
            >
              Prijavi se
            </Button>
          ) : (
            'Marko Markovic'
          )}
        </Toolbar>
      </AppBar>
      <Modal
        open={loginFormOpen}
        toggle={() => setLoginFormOpen(!loginFormOpen)}
        fullWidth={true}
        maxWidth={'xs'}
        title={'Prijavi se'}
        style={{ borderRadius: '5%' }}
        dialogContent={
          <div>
            <div style={{ borderRadius: '5%' }}>
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ margin: '10%' }}
              >
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
                    Prijavi se
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        }
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state.applicationReducer,
  };
};
export default connect(mapStateToProps, null)(Header);
