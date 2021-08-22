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
      <div className="row">
       <div className="col">
         <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="400"
          height="400"
        /></div>
      
        <button margin-left='8em' className='btn-btn-primary' onClick={capture}>Capture photo</button>
        </div>
        
        <div className="col">
        {imgSrc && (<div>
          <img display='block'
            src={imgSrc}
          />
          <div align='center'>Age:21</div>
        <div align='center'>Gender:Male</div></div>
        )}
        
        </div>
        <div className='col'>
          
        </div>
        </div>
      
    
    );
  };
  