import React from 'react';

const Viewer = (props) => {
  if(props.photo) {
    return <img src={props.photo} />
  } else {
    return false;
  }
};

export default Viewer;
