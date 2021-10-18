import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  // used to return an array of the gifs with the gif ids based on props
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif} key={gif} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;
