import React from "react";
import './ImageHolder.css';
import { getRetries,setRetries } from "../../Services/localStorage";
import { useState } from "react";
import Loader from "../Loader/Loader";

const ImageHolder = ({ name, count, images }) => {
  
  const [showLoader, setShowLoader] = useState(false);
  const fullImages = [...images];
  const retries = getRetries();
  console.log("retries from localStorage:", retries);


  while (fullImages.length < 4) {
    fullImages.push({ url: "", ready: false, error: false });
  }

  const reducer = (acc,image) => {
    return acc || image.error;
  }
  const hasError = fullImages.reduce(reducer, false);
  console.log(hasError);

  const getImageStatus = (image) =>{
    if (image.error) return 'Error';
    if (image.ready) return 'Ready';
    return 'Pending';
  }

  
  if (hasError && retries > 0) {
    console.log(`Retrying... Remaining retries: ${retries}`);
    setRetries(retries - 1);
    setShowLoader(true);
    console.log("Updated retries in localStorage:", getRetries());
    setTimeout(() => {
        window.location.reload();
    }, 5000);
} else {
    console.log("No retries left or no error.");
}

  


  return (
    <div>
      <Loader show={showLoader} />
      <div className="heading">
        {/* <h2>{name}</h2>
        <p>Count: {count}</p> */}
      </div>
      <div className="image-grid">
        {fullImages.map((image, index) => (
          <div key={index} className="image-slot" title={`Status: ${getImageStatus(image)}`}>
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
