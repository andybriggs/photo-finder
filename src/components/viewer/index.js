import React from 'react';
import { Icon } from 'react-fa';
import store from '../../store';
import { css } from 'aphrodite/no-important';
import style from './style';

const Viewer = ({ selectedImg, selectedImgNumber }) => {
  if(selectedImg) {
    return (<div className={css(style.container, style.viewer)}>
        <div className={css(style.imgWindow)}>
          <img src={selectedImg.url} alt={selectedImg.title} className={css(style.img)}/>
        </div>
        <ul className={css(style.navList)}>
          <li className={css(style.navButtonWrapper)}>
            <a href="" className={css(style.navButton)} onClick={handleClick.bind(this, selectedImgNumber, "prev")}>
              <Icon name="chevron-left" />
            </a>
          </li>
          <li className={css(style.navButtonWrapper)}>
            <a href="" className={css(style.navButton)} onClick={handleClick.bind(this, selectedImgNumber, "next")}>
              <Icon name="chevron-right" />
            </a>
          </li>
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

  store.dispatch({
    type: 'UPDATE-VIEWER',
    selectedImg
  });
}

export default Viewer;
