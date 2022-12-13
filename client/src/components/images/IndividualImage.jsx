import React from 'react';

const IndividualImage = ({ image }) => {
  return (
    <div className="photo">
      <img src={image.urls.full} alt="unsplash images" />
    </div>
  );
};

export default IndividualImage;
