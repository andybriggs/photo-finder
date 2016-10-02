import React from 'react';

const Viewer = (props) => {
  if(props.selectedImg) {
    return <img src={props.selectedImg.url} alt={props.selectedImg.title} />
  } else {
    return false;
  }
};

export default Viewer;
