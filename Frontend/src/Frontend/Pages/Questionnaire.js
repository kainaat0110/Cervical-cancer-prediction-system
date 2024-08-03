import React from 'react'
import Header from '../Layout/Header'
import Question from '../Components/QuestionComponent'

export default function Questionnaire() {
  
  return (
    <div>
      <Header />
      <div className="question-wrapper">
        <Question />
      </div>
    </div>
  )
}
