import React from 'react';

const Gallery = (props) => {
  if(props.photoList) {
    return (
      <ul>
        {props.photoList.map((photo, index) => {
          return(<li key={index}><img src={photo.url} alt={photo.title} /></li>);
        })}
      </ul>
    )
  } else {
    return false;
  }
};

export default Gallery;
