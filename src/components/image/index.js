import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import Icon from 'react-fa';

export default class Image extends Component {
  constructor() {
    super()
    this.state = {};
  }
  componentDidMount() {
    this.setState({
      loaderClasses: css(style.loader),
      imageClasses: css(style.hide)
    });
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.imgSrc != this.props.imgSrc) {
      this.setState({
        loaderClasses: css(style.loader),
        imageClasses: css(style.hide)
      });
    }
  }
  handleLoaded() {
    const loadedClasses = `${css(style.show)} ${this.props.imgStyle}`
    this.setState({
      loaderClasses: css(style.hide, style.loader),
      imageClasses: loadedClasses
    });
  }
  render() {
    return (<div>
      <span className={this.state.loaderClasses}>
        <Icon name="circle-o-notch" spin />
      </span>
      <img
        src={this.props.imgSrc}
        alt={this.props.imgAlt}
        className={this.state.imageClasses}
        onLoad={this.handleLoaded.bind(this)}
      />
    </div>);
  }
}
