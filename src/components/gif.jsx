/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React, { Component } from 'react';

// this is a class based method for building React components
// which implements a render() method and enables us to manipulate state
// but from 2019 onwards functional React components are easier to build and make sense of

class Gif extends Component {
  // function called by the onClick attribute prop when the component is rendered
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
