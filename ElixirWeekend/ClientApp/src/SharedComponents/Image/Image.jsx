import React from 'react';
import { default as MaterialImage } from 'material-ui-image';
import { Grid } from '@material-ui/core';

const Image = (props) => {
  const ref = React.createRef();
  return (
    <Grid container direction="column">
      <Grid item>
        <MaterialImage {...props} onClick={() => ref.current.click()} />
      </Grid>
      <Grid item>
        <input
          id={props.id}
          type="file"
          disabled={props.disabled}
          onChange={(event) => props.onChange(event)}
          ref={ref}
          style={{ display: 'none' }}
        />
      </Grid>
    </Grid>
  );
};

export default Image;
