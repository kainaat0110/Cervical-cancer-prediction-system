import React from 'react'
import '../Css/box.css'

export default function Box(props) {
  return (
    <div className='dr'>
      <div className="page">
        <div className="margin"></div>
        <p>{props.para}</p>
        </div>
    </div>
  )
}
