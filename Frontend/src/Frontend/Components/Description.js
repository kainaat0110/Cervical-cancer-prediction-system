import React from 'react'
import '../Css/visitor.css'

export default function Description(props) {
  return (
    <div className='descbox'>
        <br></br><br></br>
      <img className='logo' src={props.logo} height={70} width={70} />
      <h3 className='title'>{props.title} </h3>
      <p className='para2'>{props.desc}</p>
    </div>
  )
}
