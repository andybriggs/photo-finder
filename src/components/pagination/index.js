import React from 'react';
import store from '../../store';
import { css } from 'aphrodite/no-important';
import style from './style';
import { Icon } from 'react-fa';

const Pagination = (props) => {

  if(props.photoCount) {
    const pageCount = createPageCount(props.photoCount),
    previousPage = calcIndex("prev", props.currentPage, pageCount),
    nextPage = calcIndex("next", props.currentPage, pageCount),
    lastPage = calcIndex("last", props.currentPage, pageCount);

    return (<div className={css(style.container)}>
      <ul className={css(style.pagination)}>
        <li className={css(style.linkWrap)}>
          <a href="" className={css(style.link)} onClick={handleClick.bind(this, 0)}>
            <Icon name="chevron-left" />
            <Icon name="chevron-left" />
          </a>
        </li>
        <li className={css(style.linkWrap)}>
          <a href="" className={css(style.link)} onClick={handleClick.bind(this, previousPage)}>
            <Icon name="chevron-left" />
          </a>
        </li>
        {createPaging(pageCount, props.currentPage)}
        <li className={css(style.linkWrap)}>
          <a href="" className={css(style.link)} onClick={handleClick.bind(this, nextPage)}>
            <Icon name="chevron-right" />
          </a>
        </li>
        <li className={css(style.linkWrap)}>
          <a href="" className={css(style.link)} onClick={handleClick.bind(this, lastPage)}>
            <Icon name="chevron-right" />
            <Icon name="chevron-right" />
          </a>
        </li>
      </ul>
    </div>)
  } else {
    return false;
  }
}

const createPaging = (pageCount, currentPage) => {
  let paging = [];
  for (let i = 0; i < pageCount; i++) {
    let linkClasses = pageCount === i ?  css(style.link) : css(style.link);
    paging.push(<li key={i} className={css(style.linkWrap)}><a href="" className={linkClasses} onClick={handleClick.bind(this, i)}>{i + 1}</a></li>);
  }
  return paging;
}

const createPageCount = (photoCount) => {
  return Math.round(photoCount / 15);
}

const calcIndex = (action, currentPage, pageCount) => {
  if(action === "next" && currentPage < pageCount - 1) {
      return currentPage;
  } else if(action === "prev" && currentPage > 1) {
      return currentPage - 2;
  } else if(action === "last") {
      return pageCount -1;
  } else {
    return currentPage -1;
  }
}

const handleClick = (index, e) => {
  e.preventDefault();
  const page = index + 1;
  const selectedImg = (page * 15) - 15;
  store.dispatch({
    type: 'UPDATE-PAGE',
    selectedImg,
    page
  });
}

export default Pagination;
