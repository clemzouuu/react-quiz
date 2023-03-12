import { useState, useEffect } from 'react'

export default function Quizzie(props) {
   
  const [incorrectAnswers,setAnswer] = useState(props.incorrect_answers)

  const [goodAnswer,setGoodAnswer] = useState(props.correct_answer)

  const [array,setArray] = useState([])

  let allIncorrectAnswers = props.incorrect_answers.map(incorrect_answer => <p className='answers' onClick={props.toggleClick}>{incorrect_answer}</p>)
 

  return (
    <div className="quiz">
      <h1 className="questions">{props.question}</h1>
        {allIncorrectAnswers}
        <p className='answers' onClick={props.toggleClick}>{props.correct_answer}</p>
      <hr />
    </div>
  )
}
