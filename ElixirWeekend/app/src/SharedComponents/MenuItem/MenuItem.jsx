import { MenuItem as MaterialMenuItem, withStyles } from '@material-ui/core';

export const MenuItem = withStyles((theme) => ({
  root: {
    ' &:hover': {
      backgroundColor: '#4BA3C7',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MaterialMenuItem);
