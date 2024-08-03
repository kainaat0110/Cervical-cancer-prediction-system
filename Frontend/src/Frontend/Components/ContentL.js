import React from 'react'

export default function ContentL(props) {
  return (
    <div>
      <div className='content'>
      <p className='contentpara2'>{props.para}</p>
      <img src={props.img} className='contentimg' height={400} width={600}/>
    </div>
    </div>
  )
}
