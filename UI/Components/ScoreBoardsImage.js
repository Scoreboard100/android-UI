import React, { Component } from 'react';
import {Image } from 'react-native';

 class ScoreBoardsImage extends Component {
  render() {
    let pic = {
      uri: 'http://lundcricketclub.org/wp-content/uploads/2017/01/cricket-wallpapers-017.jpg'
    };
    return (
      <Image source={pic} style={{width: 200, height: 200}}/>
    );
  }
}
export default ScoreBoardsImage;