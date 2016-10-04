import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import style from './components/style/globals.css';
import { Header, Viewer, Gallery, Pagination } from './components';

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
      <Viewer selectedImg={selectedImg} selectedImgNumber={this.state.galleryState.selectedImg} photoCount={photoCount} />
      <Gallery photoList={photoList} page={this.state.galleryState.page} loading={this.state.galleryState.loading} />
      <Pagination photoCount={photoCount} currentPage={this.state.galleryState.page} />
    </div>)
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
