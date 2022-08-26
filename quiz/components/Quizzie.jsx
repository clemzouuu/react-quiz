import { useState } from 'react'

export default function HomePage(props) {
  



  let answerArray = []
  answerArray.push(props.correct_answer + ' ')

  for (let counter = 0; counter < 3; counter++) {
    answerArray.push(props.incorrect_answers[counter] + ' ')
  }


  const [clicked, setClicked] = useState(false)

  function clickedAnswer() {
    setClicked(true)
  }

  let styles = {
    backgroundColor: clicked ? ' #0b2f72' : '',
    color: clicked ? 'white ' : ' ',
  }

  const eachAnswer = answerArray.map((question) => (
    <p className="answers" style={styles}>
      {question}
    </p>
  ))

  


  return (
    <div className="quiz">
      <h1 className="questions">{props.question}</h1>
      <p 
      onClick={clickedAnswer}
      >{eachAnswer}</p>
      <hr />
    </div>
  )
}
