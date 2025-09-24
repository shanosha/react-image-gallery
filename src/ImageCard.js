import React from "react";

function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="image"
      />
      <p className="caption">By {image.user.name}</p>
    </div>
  );
}

export default ImageCard;
