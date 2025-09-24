import React, { useEffect, useState } from "react";
import ImageGrid from "./ImageGrid";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/?client_id=57vczRnQzJv9u0QOJDmM07cIXjGgKOKCLd4GORittHI&per_page=12`
        );
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>📸 Unsplash Image Gallery</h1>
      <ImageGrid images={images} />
    </div>
  );
}

export default App;
