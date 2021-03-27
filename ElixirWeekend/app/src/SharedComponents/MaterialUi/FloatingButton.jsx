import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      display: "inline-block",
      "background-color": "#38a856",
      "float": "right",
      minWidth: "300px",
      minHeight: "150px"

    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    
   
  },
}));

export default function FloatingButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        Korpa
      </Fab>
    
    </div>
  );
}