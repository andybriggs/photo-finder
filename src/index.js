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
     this.appState = store.subscribe(this.updateGallery.bind(this));
   }
   updateGallery = () => {
     this.setState(store.getState());
     return this.state;
   }
  render() {
    let photoList = this.state.galleryState.photoList;
    let selectedImg = photoList ? photoList[this.state.viewerState.selectedImg] : null;
    console.log(this.state.viewerState.selectedImg);
    return (<div>
      <Header />
      <Search />
      <Viewer selectedImg={selectedImg} />
      <Gallery photoList={photoList} />
    </div>)
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
