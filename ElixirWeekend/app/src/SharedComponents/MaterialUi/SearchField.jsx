import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'inline-block',
      
    },
  },
}));

export default function SearchField() {
  const classes = useStyles();

  return (
      <TextField id="filled-basic" className={classes.root} label="Pretraga" variant="filled" />

  );
}