import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components';

const App = () => {
  return (<div>
    <Header />
  </div>)
};

ReactDOM.render(<App />, document.getElementById('root'));
