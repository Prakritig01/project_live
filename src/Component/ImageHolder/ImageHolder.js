import React from "react";
import './ImageHolder.css';

const ImageHolder = ({ name, count, images }) => {
  const fullImages = [...images];
  while (fullImages.length < 4) {
    fullImages.push({ url: "", ready: false, error: false });
  }

  return (
    <div>
      <div className="heading">
        {/* <h2>{name}</h2>
        <p>Count: {count}</p> */}
      </div>
      <div className="image-grid">
        {fullImages.map((image, index) => {
          return (
            <div key={index} className="image-slot">
              {image.ready ? (
                <img src={image.url} alt={`Image ${index + 1}`} />
              ) : image.error ? (
                <div className="error-icon">⚠️</div>
              ) : (
                <div className="placeholder">+</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageHolder;
