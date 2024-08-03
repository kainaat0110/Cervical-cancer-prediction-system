import React from 'react'
import '../Css/card.css'

const ArticleBox = (props) => { 
  return (
    <div class="cardar">
    <p>{props.article}</p>
    </div>
  )
}

export default ArticleBox;