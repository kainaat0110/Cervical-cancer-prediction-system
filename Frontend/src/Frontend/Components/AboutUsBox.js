import React from 'react'

export default function AboutUsBox(props) {
  return (
    <div>
      <img className='logo' src={props.logo} height={70} width={70} />
      <h3 className='title'>{props.title} </h3>
      <p className='para2'>{props.desc}</p>
    </div>
  )
}
