import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const DisabledInput = (props) => {
  return (
    <TextField
      disabled={true}
      variant="outlined"
      style={{ width: '100%' }}
      {...props}
      size="small"
      fullWidth={props.fullWidth}
    />
  );
};

export default DisabledInput;

DisabledInput.propTypes = {
  label: PropTypes.string.isRequired,
};
