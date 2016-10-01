import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Search } from './components';

const App = () => {
  return (<div>
    <Header />
    <Search />
  </div>)
};

ReactDOM.render(<App />, document.getElementById('root'));
