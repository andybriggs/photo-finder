import React from 'react';
import store from '../../store';

const Pagination = (props) => {
  if(props.pages) {
    const pages = Math.round(props.pages / 15);
    return (<ul>
      {createPaging(pages)}
    </ul>)
  } else {
    return false;
  }
};

const createPaging = (pages) => {
  let paging = [];
  for (let i = 0; i < pages; i++) {
    paging.push(<li key={i}><a href="" onClick={handleClick.bind(this, i)}>{i + 1}</a></li>)
  }
  return paging;
}

const handleClick = (index, e) => {
  e.preventDefault();
}

export default Pagination;
