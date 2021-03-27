import React from 'react';
import { default as MaterialChip } from '@material-ui/core/Chip';

const Chip = (props) => {
  return <MaterialChip {...props} style={{ margin: '2px' }} />;
};

export default Chip;
