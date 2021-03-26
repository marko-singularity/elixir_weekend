import React from 'react';
import { Checkbox as MaterialCheckbox } from '@material-ui/core/';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Checkbox = (props) => {
  const { label, ...checkbox } = { ...props };
  return (
    <FormControlLabel
      control={
        <MaterialCheckbox
          {...checkbox}
          onChange={(event) =>
            props.onChange({
              id: event.target.id,
              value: event.target.checked ? 1 : 0,
            })
          }
          color="primary"
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
