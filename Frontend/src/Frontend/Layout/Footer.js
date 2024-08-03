import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <hr style={{ border:'2px solid black'}}/>
      <Link to="/about"></Link>
    </div>
  )
}
