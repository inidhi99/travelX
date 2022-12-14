import React from 'react';

const IndividualImage = ({ image }) => {
  return (
    <a href={data.urls.regular}>
      <img src={image.urls.small} alt={data.alt_description} />
    </a>
  );
};

export default IndividualImage;
