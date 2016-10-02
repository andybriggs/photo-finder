import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Header, Search, Viewer, Gallery } from './components';

export default class App extends Component {
  constructor() {
     super();
     this.state = store.getState();
   }
   componentDidMount() {
     this.menuState = store.subscribe(this.updateGallery.bind(this));
   }
   updateGallery = () => {
     this.setState(store.getState());
     return this.state;
   }
  render() {
    return (<div>
      <Header />
      <Search />
      <Viewer />
      <Gallery photoList={this.state.galleryState.photoList} />
    </div>)
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
