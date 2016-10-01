import React, { PropTypes, Component } from 'react';

class Search extends Component {

  constructor(){
    super();
    this.state = { value: '' };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  getValue = () => {
    return this.state.value;
  }

  render(){
    return (
      <form>
        <label htmlFor="search">Search photos:</label>
        <input id="search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="e.g. Stars" />
      </form>
    );
  }
}

export default Search;
