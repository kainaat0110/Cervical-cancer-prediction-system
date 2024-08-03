
import React, { useEffect, useState } from 'react';
import '../Css/question.css';

const QuestionComponent = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});


  const questions = [
    {
      id: 1,
      question: 'Enter the age group to which your age belongs.',
      options: [
        { id: 'A', text: '11-20' },
        { id: 'B', text: '21-30' },
        { id: 'C', text: '31-40' },
        { id: 'D', text: '41-50' },
      ],
    },
    {
      id: 2,
      question: 'Smoke',
      options: [
        { id: 'A', text: 'Yes' },
        { id: 'B', text: 'No' },
      ],
    },
    {
      id: 3,
      question: 'Number of pregnancies',
      options: [
        { id: 'A', text: '0' },
        { id: 'B', text: '1 - 2' },
        { id: 'C', text: '3 - 5' },
        { id: 'D', text: 'Above 5' },
      ],
    },
    {
      id: 4,
      question: 'Does your report says HPv as Positive?',
      options: [
        { id: 'A', text: 'Yes' },
        { id: 'B', text: 'No' },
      ],
    },
    {
      id: 5,
      question: 'First sexual intercourse',
      options: [
        { id: 'A', text: '12 - 15' },
        { id: 'B', text: '16 - 19' },
        { id: 'C', text: 'After 20' },
        { id: 'D', text: 'Not done yet' },
      ],
    },
    {
      id: 6,
      question: 'Does your Hinselmann test report says positive?',
      options: [
        { id: 'A', text: 'Yes' },
        { id: 'B', text: 'No' },
      ],
    },
    {
      id: 7,
      question: 'Does your Schiller test report says positive?',
      options: [
        { id: 'A', text: 'Yes' },
        { id: 'B', text: 'No' },
      ],
    },
    {
      id: 8,
      question: 'Does your Citology test report says positive?',
      options: [
        { id: 'A', text: 'Yes' },
        { id: 'B', text: 'No' },
      ],
    },
    {
      id: 9,
      question: 'Does your Biopsy test report says positive?',
      options: [
        { id: 'A', text: 'Yes' },
        { id: 'B', text: 'No' },
      ],
    },
    {
      id: 10,
      question: 'Do you take Oral Contraceptives?',
      options: [
        { id: 'A', text: 'Yes' },
        { id: 'B', text: 'No' },
      ],
    },
    
  ];

  const handleAnswerSelection = (questionId, optionId) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = async () => {
    try {
      const userInputs = {
        age: selectedAnswers[1] === 'A' ? 18 :
        selectedAnswers[1] === 'B' ? 25 :
        selectedAnswers[1] === 'C' ? 35: 
        selectedAnswers[1] === 'D' ? 45 : 'Unknown', // Handle invalid input,
        smoking: selectedAnswers[2] === 'A' ? 1 : 0,
        pregnancies: selectedAnswers[3] === 'A' ? 0 :
        selectedAnswers[3] === 'B' ? 1 :
        selectedAnswers[3] === 'C' ? 2 :
        selectedAnswers[3] === 'D' ? 3 : -1, // Handle invalid input
        dx_hpv: selectedAnswers[4] === 'A' ? 1 : 0,
        first_intercourse: selectedAnswers[5] === 'A' ? 15 : 
        selectedAnswers[5] === 'B' ? 18 :
        selectedAnswers[5] === 'C' ? 25 : 21,
        hinselmann: selectedAnswers[6] === 'A' ? 1 : 0,
        schiller: selectedAnswers[7] === 'A' ? 1 : 0,
        citology: selectedAnswers[8] === 'A' ? 1 : 0,
        biopsy: selectedAnswers[9] === 'A' ? 1 : 0,
        oral_contraceptives: selectedAnswers[10] === 'A' ? 1 : 0,
      };

      const response = await fetch('http://localhost:8001/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInputs),
      });

      const data = await response.json();
      console.log('Predictions:', data.predictions);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="survey-container">
      <div className="survey-content">
        {questions.map((question) => (
          <div key={question.id} className="question-container">
            <p className="question-text">{question.question}</p>
            <ul className="option-list">
              {question.options.map((option) => (
                <li key={option.id} className="option-item">
                  <label>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.id}
                      checked={selectedAnswers[question.id] === option.id}
                      onChange={() => handleAnswerSelection(question.id, option.id)}
                    />
                    {option.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default QuestionComponent;
