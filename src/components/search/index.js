import React, { PropTypes, Component } from 'react';

class Search extends Component {

  constructor(){
    super();
    this.state = { inputValue: '' };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    return this.state.inputValue;
  }

  getValue = () => {
    return this.state.inputValue;
  }

  render(){
    return (
      <form>
        <label htmlFor="search">Search stuff:</label>
        <input id="search" type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="Stuff" />
        <button onClick={this.handleSubmit}>Search</button>
      </form>
    );
  }
}

export default Search;
