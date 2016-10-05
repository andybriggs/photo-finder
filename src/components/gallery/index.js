import React from 'react';
import { Icon } from 'react-fa';
import store from '../../store';
import { css } from 'aphrodite/no-important';
import style from './style';
import Image from '../image';

const Gallery = (props) => {
  if(props.photoList && props.loading === false) {
    const pageList = createPageList(props.page, props.photoList);
    return (
      <div className={css(style.container, style.gallery)}>
        <ul className={css(style.photoList)}>
          {pageList.map((photo, index) => {
            return(
              <li key={index} className={css(style.photoWrapper)}>
                <a href="" onClick={handleClick.bind(this, photo.photoIndex)}>
                  <Image imgSrc={photo.url} imgAlt={photo.title} imgStyle={css(style.photo)} />
                </a>
              </li>);
          })}
        </ul>
      </div>
    )
  } else if (props.loading === true) {
    return (<Icon className={css(style.loader)} name="circle-o-notch" spin />)
  } else {
    return false;
  }
};

const createPageList = (page, photoList) => {
  const end = parseInt(page * 15),
  start = parseInt(end -15),
  pageList = photoList.slice(start, end);
  for(page in pageList) {
    pageList[page].photoIndex = start + parseInt(page);
  }
  return pageList;
}

const handleClick = (index, e) => {
  e.preventDefault();
  store.dispatch({
    type: 'UPDATE-VIEWER',
    selectedImg: index
  });
}

export default Gallery;
