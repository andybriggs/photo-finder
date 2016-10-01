import React from 'react';

const Gallery = (props) => {
  return (
    <ul>
      {props.urls.map((url, index) => {
        return(<li key={index}><img src={url} /></li>);
      })}
    </ul>
  )
};

export default Gallery;
