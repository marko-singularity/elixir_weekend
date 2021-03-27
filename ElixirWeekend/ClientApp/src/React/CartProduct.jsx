import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
export const CartProduct = (props) => {
  console.log(props);
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        height: '50px',
        color: props.color,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ paddingTop: '10px' }}>
        {props.index + '.' + ' ' + props.name}
        <span style={{ color: 'greenyellow' }}>
          {'        ' + props.price + 'KM'}
        </span>
      </div>
      <div style={{ display: 'inline-block', textAlign: 'right' }}>
        <CloseIcon
          onClick={() => {
            props.deleteProduct(props.index - 1);
          }}
        />
      </div>
    </div>
  );
};
