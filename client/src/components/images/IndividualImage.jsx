import React from 'react';

const IndividualImage = ({ image }) => {
  return (
    <a href={image.urls.regular}>
      <img src={image.urls.small} alt={image.alt_description} />
    </a>
  );
};

export default IndividualImage;
