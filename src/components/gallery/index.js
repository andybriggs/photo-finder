import React from 'react';
import store from '../../store';

const Gallery = (props) => {
  if(props.photoList) {
    return (
      <ul>
        {props.photoList.map((photo, index) => {
          return(<li key={index}><a href="" onClick={handleClick.bind(this, index)}><img src={photo.url} alt={photo.title} /></a></li>);
        })}
      </ul>
    )
  } else {
    return false;
  }
};

const handleClick = (index, e) => {
  e.preventDefault();
  store.dispatch({
    type: 'UPDATE-VIEWER',
    selectedImg: index
  });
}

export default Gallery;
