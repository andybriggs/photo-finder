import React from 'react';
import store from '../../store';

const Pagination = (props) => {
  if(props.pageCount) {
    const pageCount = Math.round(props.pageCount / 15);
    return (<ul>
      {createPaging(pageCount)}
    </ul>)
  } else {
    return false;
  }
};

const createPaging = (pageCount) => {
  let paging = [];
  for (let i = 0; i < pageCount; i++) {
    paging.push(<li key={i}><a href="" onClick={handleClick.bind(this, i)}>{i + 1}</a></li>)
  }
  return paging;
}

const handleClick = (index, e) => {
  e.preventDefault();
}

export default Pagination;
