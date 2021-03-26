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
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.dialogContent}</DialogContent>
    </Dialog>
  );
};

export default Modal;
