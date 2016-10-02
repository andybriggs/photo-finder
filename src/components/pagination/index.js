import React from 'react';
import store from '../../store';

const Pagination = (props) => {

  if(props.photoCount) {
    const pageCount = createPageCount(props.photoCount);
    const previousPage = calcIndex("prev", props.currentPage, pageCount);
    const nextPage = calcIndex("next", props.currentPage, pageCount);
    const lastPage = calcIndex("last", props.currentPage, pageCount);

    return (<ul>
      <li><a href="" onClick={handleClick.bind(this, 0)}>&lt;&lt;</a></li>
      <li><a href="" onClick={handleClick.bind(this, previousPage)}>&lt;</a></li>
      {createPaging(pageCount)}
      <li><a href="" onClick={handleClick.bind(this, nextPage)}>&gt;</a></li>
      <li><a href="" onClick={handleClick.bind(this, lastPage)}>&gt;&gt;</a></li>
    </ul>)
  } else {
    return false;
  }
}

const createPaging = (pageCount) => {
  let paging = [];
  for (let i = 0; i < pageCount; i++) {
    paging.push(<li key={i}><a href="" onClick={handleClick.bind(this, i)}>{i + 1}</a></li>)
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
  console.log(page);
  store.dispatch({
    type: 'UPDATE-PAGE',
    selectedImg,
    page
  });
}

export default Pagination;
