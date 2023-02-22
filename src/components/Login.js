import React from 'react'

export default function Login({InputChange, onButtonSubmit}) {
  return (
    <div className='singin'>
      <p>This Magic Brain will detect faces in your pictures. Give it a try!</p>
      <div className="searchbox">
        <input type='text' className='f4 pa2 w-60 center' onChange={InputChange}/>
        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer center'
        onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  )
}