import React from 'react'
import '../Css/description.css'

export default function Description2(props) {
  return (
    <div>
      <div className='descbox21'>
        <br></br><br></br>
      <img className='logo2' src={props.logo} height={40} width={40} />
      <div className='subbox'>
      <h3 className='title2'>{props.title} </h3>
      <p className='desc2'>{props.desc}</p>
      </div>
    </div>
    </div>
  )
}
