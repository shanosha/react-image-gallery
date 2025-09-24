import React from "react";
import ImageCard from "./ImageCard";
import "./ImageGrid.css";

function ImageGrid({ images }) {
  return (
    <div className="grid-container">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
}

export default ImageGrid;
