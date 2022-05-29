import React, {useState} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const videoConstraints = {
    width : 200,
    height : 200,
    facingMode: 'user'
  };
  const[name, setName] = useState('')
  const capture = React.useCallback(
  () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(`imageSrc = ${imageSrc}`)
                //for deployment, you should put your backend url / api
    axios.post('https://mirror-engage2022.herokuapp.com/api', {data : imageSrc})
    	  .then(res => {
      	  console.log(`response = ${res.data}`)
      	  setName(res.data)
    })
    	  .catch(error => {
      	  console.log(`error = ${error}`)
    })
  }, 
   [webcamRef]
  );
  
  return (
  <div style={{position: "absolute", display: "flex", flexDirection: "column", marginTop: "-70vh", alignItems: "center", borderRadius: "10px", marginLeft: "35vw"}}>
    <div><Webcam
     audio = {false}
	 height = {300}
	 ref = {webcamRef}
	 screenshotFormat = "image/jpeg"
	 width = {350}
	 videoConstraints = {videoConstraints}
	/></div>
    <div><p style={{position: "absolute", marginLeft: "-5vw", alignItems: "center"}}><button style={{background: "#E83D5E", border: "2px solid #E83D5E", color: "#fff", fontSize: "20px", fontWeight: "300"}} onClick={capture}>MIRROR it!</button></p></div>
	<div style={{position: "absolute", marginLeft: "-5vw", marginTop: "50vh", alignItems: "center"}}><h2 style={{color: "#fff", fontFamily: "Manrope", fontSize: "30px", fontWeight: "bolder"}}>{name}</h2></div>
  </div>
	);
  
};

export default WebcamCapture;