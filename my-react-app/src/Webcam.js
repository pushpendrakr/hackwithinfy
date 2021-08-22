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
       <div className="col card" >
         <div style={{marginLeft:'3em'}}>
         <h5 class="card-title" style={{marginLeft:'7em'}}>Webcam</h5>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="400"
          height="400"
        /></div>
      
        <button margin-left='8em' className='btn-btn-primary' onClick={capture}>Capture photo</button>
        </div>
        
        <div className="col card">
        <h5 class="card-title" style={{marginLeft:'8em'}}>SnapShot</h5>
        {imgSrc && (<div style={{ paddingTop:'3.1em', paddingLeft:'3em'} }>
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
  