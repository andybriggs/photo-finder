import React from 'react';
import store from '../../store';

const Pagination = (props) => {

  if(props.photoCount) {
    const pageCount = createPageCount(props.photoCount);
    return (<ul>
      {createPaging(pageCount)}
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

const handleClick = (index, e) => {
  e.preventDefault();
  const page = index + 1;
  store.dispatch({
    type: 'UPDATE-PAGE',
    page
  });
}

export default Pagination;
