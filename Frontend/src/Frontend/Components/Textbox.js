import React from 'react'
import '../Css/visitor.css'

export default function Textbox(props) {
  return (
    <div className='textbox'>
      <h1 className='head'>{props.title}</h1>
      <p className='para' >{props.para}</p>
    </div>
  )
}
