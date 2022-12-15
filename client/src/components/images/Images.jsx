import React from 'react';
import IndividualImage from './IndividualImage';

const Images = ({ images }) => {
  //   const randomIndex = Math.floor(Math.random() * images.length);
  return <IndividualImage key={images} image={images} />;
};

export default Images;
