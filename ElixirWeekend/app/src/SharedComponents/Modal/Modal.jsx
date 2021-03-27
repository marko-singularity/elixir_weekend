import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

const Modal = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.toggle}
      fullWidth={true}
      maxWidth={props.maxWidth}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle
        style={{
          textAlign: 'center',
          backgroundColor: 'white',
          fontSize: '60px',
          color: '#4891A0',
        }}
      >
        {props.title}
      </DialogTitle>
      <DialogContent style={{ backgroundColor: '#4891A0' }}>
        {props.dialogContent}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
