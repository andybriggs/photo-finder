import React from 'react';
import store from '../../store';
import { css } from 'aphrodite/no-important';
import style from './style';

const Viewer = ({ selectedImg, selectedImgNumber }) => {
  if(selectedImg) {
    return (<div className={css(style.container)}>
        <img src={selectedImg.url} alt={selectedImg.title} className={css(style.img)}/>
        <ul>
          <li><a href="" onClick={handleClick.bind(this, selectedImgNumber, "prev")}>&lt;</a></li>
          <li><a href="" onClick={handleClick.bind(this, selectedImgNumber, "next")}>&gt;</a></li>
        </ul>
      </div>)
  } else {
    return false;
  }
};

const handleClick = (selectedImgNumber, action, e) => {

  e.preventDefault();
  let selectedImg;

  if(action === "next") {
    selectedImg = selectedImgNumber + 1;
  } else if (action === "prev") {
    selectedImg = selectedImgNumber -1;
  }
  console.log(selectedImg);
  store.dispatch({
    type: 'UPDATE-VIEWER',
    selectedImg
  });
}

export default Viewer;
