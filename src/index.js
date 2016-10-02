import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Header, Search, Viewer, Gallery, Pagination } from './components';

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
    let selectedImg = photoList ? photoList[this.state.galleryState.selectedImg] : null;
    let showPaging = photoList ? true : false;
    let photoCount = photoList ? photoList.length : 0;
    return (<div>
      <Header />
      <Search />
      <Viewer selectedImg={selectedImg} />
      <Gallery photoList={photoList} page={this.state.galleryState.page} />
      <Pagination photoCount={photoCount} currentPage={this.state.galleryState.page} />
    </div>)
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
