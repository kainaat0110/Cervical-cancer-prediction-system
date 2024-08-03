import React from 'react'
import '../Css/content.css'

export default function Content(props) {
  return (
    <div className='content'>
      <img src={props.img} className='contentimg' height={400} width={600}/>
      <p className='contentpara'>{props.para}</p>
    </div>
  )
}
