import React from 'react';

const Viewer = (props) => {
  if(props.selectedImg) {
    return <img src={props.selectedImg.url} />
  } else {
    return false;
  }
};

export default Viewer;
