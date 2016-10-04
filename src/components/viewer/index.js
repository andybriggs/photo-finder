import React from 'react';
import { Icon } from 'react-fa';
import Image from '../image';
import store from '../../store';
import { css } from 'aphrodite/no-important';
import style from './style';

const Viewer = ({ selectedImg, selectedImgNumber, photoCount }) => {
  if(selectedImg) {
    return (<div className={css(style.container, style.viewer)}>
        <div className={css(style.imgWindow)}>
          <Image imgSrc={selectedImg.url} imgAlt={selectedImg.title} imgStyle={css(style.img)} />
        </div>
        <ul className={css(style.navList)}>
          <li className={css(style.navButtonWrapper)}>
            <a href="" className={css(style.navButton)} onClick={handleClick.bind(this, selectedImgNumber, "prev", photoCount)}>
              <Icon name="chevron-left" />
            </a>
          </li>
          <li className={css(style.navButtonWrapper)}>
            <a href="" className={css(style.navButton)} onClick={handleClick.bind(this, selectedImgNumber, "next", photoCount)}>
              <Icon name="chevron-right" />
            </a>
          </li>
        </ul>
      </div>)
  } else {
    return false;
  }
};

const handleClick = (selectedImgNumber, action, photoCount, e) => {

  e.preventDefault();
  let selectedImg;

  if(action === "next" && selectedImgNumber < photoCount -1) {
    selectedImg = selectedImgNumber + 1;
  } else if (action === "prev" && selectedImgNumber != 0) {
    selectedImg = selectedImgNumber -1;
  } else {
    selectedImg = selectedImgNumber;
  }

  store.dispatch({
    type: 'UPDATE-VIEWER',
    selectedImg
  });
}

export default Viewer;
