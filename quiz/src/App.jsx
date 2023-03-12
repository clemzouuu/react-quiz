import { useState } from 'react'
import HomePage from '../components/HomePage'
import './App.css'
import Quizzie from '../components/Quizzie'
import { useEffect } from 'react'

function App() {

  const [displayMenu, setDisplayMenu] = useState(true) 
  const [displayQuizzie,setDisplayQuizzie] = useState(false)

  const [questions,setAllQuestions] = useState([])  

  // API call, set the datas in a state
  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=7&category=22&difficulty=hard&type=multiple')
    .then((res) => res.json())
    .then((data) => setAllQuestions(data.results))
  },[])
 
  
  // On click, the first menu disappears
  function startQuizzie () {
    setDisplayMenu(false)
    setDisplayQuizzie(true) 
  } 

  // For each question fetched, there is a component which has the informations
  const displayQuestions = questions.map((element) => (
    <Quizzie 
      key={element.question}
      question={element.question}
      correct_answer={element.correct_answer}
      incorrect_answers={element.incorrect_answers}
      toggleClick={handdleClick}
    /> 
  ))

  function handleSubmit(event) {
    event.preventDefault() 
    
  }

  return (
    <div className="App">
      {displayMenu && <HomePage startQuiz={startQuizzie} />}

      <form className="form" onSubmit={handleSubmit}>
        {displayQuestions}
        <button className="form--submit">Submit</button>
      </form>
    </div>
  )
}

export default App
