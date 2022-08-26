import { useState } from 'react'
import HomePage from '../components/HomePage'
import './App.css'
import Quizzie from '../components/Quizzie'
import { useEffect } from 'react'

function App() {

  const [displayMenu, setDisplayMenu] = useState(true) 
  const [displayQuizzie,setDisplayQuizzie] = useState(false)
  const [questions,setAllQuestions] = useState([]) 
  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=7&category=22&difficulty=hard&type=multiple')
    .then((res) => res.json())
    .then((data) => setAllQuestions(data.results))
  },[])
 

  function startQuizzie () {
    setDisplayMenu(false)
    setDisplayQuizzie(true) 
  }

  const displayQuestions = questions.map((element) => (
    <Quizzie
      question={element.question}
      correct_answer={element.correct_answer}
      incorrect_answers={element.incorrect_answers}
    />
  ))
  
  return (
    <div className="App">
      {displayMenu && 
      <HomePage 
      startQuiz={startQuizzie}
      />}
    {displayQuestions}
    </div>
  )
}

export default App
