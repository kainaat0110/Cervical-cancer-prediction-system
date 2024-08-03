import React from 'react'
import '../Css/button.css'

export default function Button(props) {
  const awareness = () => {
    window.location.href = '/awareness';
  };
  const assesment = () => {
    window.location.href = '/awareness';
  };
  const guidance = () => {
    window.location.href = '/awareness';
  };

  return (
    <div className='butnclass'>
      <button onClick={ props.click } className='butn'>
        {props.btn}
      </button>
    </div>
  )
}
