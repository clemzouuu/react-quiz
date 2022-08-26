export default function HomePage (props) {
    return (
      <div className="start_page">
        <div className="start_div">
          <p className="welcome_message">
            Welcome to Quizzie
          </p>
          <button className="start_button" onClick={props.startQuiz}>
            Start the quiz
          </button>
        </div>
      </div>
    )
}