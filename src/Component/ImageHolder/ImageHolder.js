import React from "react";
import './ImageHolder.css';

const ImageHolder = ({ name, count, images }) => {
  
  const fullImages = [...images];

 
  while (fullImages.length < 4) {
    fullImages.push({ url: "", ready: false, error: false });
  }

  const reducer = (acc,image) => {
    console.log("image.eror in image :" ,image.error, image);
    // (acc, image) => acc || image.error === true
    return acc || image.error;
  }
  const hasError = fullImages.reduce(reducer, false);
  console.log(hasError);

  return (
    <div>
      <div className="heading">
        {/* <h2>{name}</h2>
        <p>Count: {count}</p> */}
      </div>
      <div className="image-grid">
        {fullImages.map((image, index) => (
          <div key={index} className="image-slot">
            {image.ready ? (
              <img src={image.url} alt={`Image ${index + 1}`} />
            ) : image.error ? (
              <div className="error-icon">⚠️</div>
            ) : (
              <div className="placeholder">+</div>
            )}
          </div>
        ))}
      </div>

      {/* Show the additional error icon if there is an error */}
      {hasError && (
        <div className="error-icon2">⚠️</div>
      )}
    </div>
  );
};

export default ImageHolder;
