import React from 'react'
import './box.css'

export default function FaceRecognition({obj, address}) {
  return (
    <div className='center1 ma'>
      <div className='absolute'>
        <img src={address} id="pic" alt="" width="300px"/>
        <div className="bounding-box mt1" style={{top: obj.topRow, right:obj.rightCol, bottom: obj.bottomRow, left: obj.leftCol}}>
        </div>
      </div>
    </div>
  )
}
