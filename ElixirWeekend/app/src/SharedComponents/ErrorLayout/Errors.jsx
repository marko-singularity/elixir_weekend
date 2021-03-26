import React from 'react';
import Accordion from '../Accordion/Accordion';
import {
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grid,
} from '@material-ui/core';

const Errors = (props) => {
  if (props.errors.length === 0) {
    return null;
  }
  return (
    <Accordion
      style={{
        width: '100%',
        borderRadius: '3px',
        border: 'solid',
        borderWidth: '1px',
      }}
    >
      <AccordionSummary style={{ backgroundColor: '#bd1010', color: 'white' }}>
        <Typography>Errors</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container direction="column">
          {props.errors.map((error) => (
            <Typography key={error} style={{ color: 'red' }}>
              {error}
            </Typography>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default Errors;
