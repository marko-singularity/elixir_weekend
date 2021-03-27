import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const Input = (props) => {
  return (
    <TextField
      variant="outlined"
      size={'small'}
      {...props}
      style={{
        width: '70%',
        height: '35px',
        borderRadius: '10px',
        backgroundColor: 'white',
      }}
      onChange={(event) =>
        props.onChange({
          id: event.target.id,
          value: event.target.value,
        })
      }
    />
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
