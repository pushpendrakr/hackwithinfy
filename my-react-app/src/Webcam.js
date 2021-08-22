import React from 'react'
import Webcam from "react-webcam";

const videoConstraints = {
    width: 100,
    height: 100,
    facingMode: "user"
  };
  
  export const Webcam1  = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
      <>
      
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="400"
          height="400"
        />
       
        <button className='btn-btn-primary' onClick={capture}>Capture photo</button>
        <div>
        {imgSrc && (
          <img display='block'
            src={imgSrc}
          />
        )}
        </div>
      </>
    );
  };
  