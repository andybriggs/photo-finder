import React from 'react';

const Gallery = (props) => {
  return (
    <ul>
      {props.photoList.map((photo, index) => {
        return(<li key={index}><img src={photo.url} alt={photo.title} /></li>);
      })}
    </ul>
  )
};

export default Gallery;
