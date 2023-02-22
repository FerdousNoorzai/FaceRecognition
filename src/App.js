import './App.css';
import React, { useState } from 'react';
import ParticlesBg from 'particles-bg';
import Login from './components/Login';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition';

//Start from Applying the squared Box on the image using the provided response from the Clarifai

export default function App (){
  const [address, setAddress] = useState({});
  const [obj,setObj]= useState({});

  const InputChange =(e)=>{
    let webURL= e.target.value;
    console.log(webURL)
    setAddress(webURL)
  }

  const display = (data) =>{
    let face = data.outputs[0].data.regions[0].region_info.bounding_box;
    let image = document.getElementById('pic');
    let width = Number(image.width);
    let height = Number(image.height);
    console.log(face,image,width,height);
    return {
      leftCol: face.left_col*width,
      topRow: face.top_row*height,
      rightCol: width - (face.right_col*width),
      bottomRow: height - (face.bottom_row*height) 
    }
  }
  
  const onButtonSubmit = () =>{
    const USER_ID = '8jb3ky2sd7xe';
    const PAT = 'a9b87dc57c2b4fada5f465d71960bf27';
    const APP_ID = 'my-first-application';
    const MODEL_ID = 'face-detection';   
    const IMAGE_URL = address;

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => (setObj(display(result))))
        .catch(error => console.log('error', error)); 

        console.log(obj);
  }

  return(
  <>
    <ParticlesBg className="backcolor" type="cobweb" color="#ff0000" num={170} bg={true} />
    <nav>
      <Logo/>
      <p style={{fontSize:'2em', fontWeight: 'bolder', textShadow:'5px 0 10px'}}>
      Welcome to Face Recognition App</p>
      <h2 className='styling'>Sign In</h2>
    </nav>
    <Rank />
    <div className="center1">
    <Login InputChange={InputChange} onButtonSubmit={onButtonSubmit}/>
    </div>
    <FaceRecognition obj={obj} address={address} />
  </>)
}