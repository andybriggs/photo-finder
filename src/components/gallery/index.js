import React from 'react';
import store from '../../store';
import { css } from 'aphrodite/no-important';
import style from './style';

const Gallery = (props) => {
  if(props.photoList) {
    const pageList = createPageList(props.page, props.photoList);
    return (
      <div className={css(style.container)}>
        <ul className={css(style.photoList)}>
          {pageList.map((photo, index) => {
            return(
              <li key={index} className={css(style.photoWrapper)}>
                <a href="" onClick={handleClick.bind(this, photo.photoIndex)}>
                  <img className={css(style.photo)} src={photo.url} alt={photo.title} />
                </a>
              </li>);
          })}
        </ul>
      </div>
    )
  } else {
    return false;
  }
};

const createPageList = (page, photoList) => {
  const end = parseInt(page * 15);
  const start = parseInt(end -15);
  const pageList = photoList.slice(start, end);
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
