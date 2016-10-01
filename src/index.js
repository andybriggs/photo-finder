import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Search, Gallery } from './components';

const App = () => {
  const tempUrlArr = ["https://farm6.staticflickr.com/5259/29751819170_3b7f2d4b5b.jpg",
    "https://farm9.staticflickr.com/8230/29418974953_aaf155e8f1.jpg",
    "https://farm9.staticflickr.com/8413/29751137390_53408de818.jpg"
  ]
  return (<div>
    <Header />
    <Search />
    <Gallery urls={tempUrlArr} />
  </div>)
};

ReactDOM.render(<App />, document.getElementById('root'));
