import { Link } from "react-router-dom";
import "./Quiz.css";

const eazyButton = require("../assets/EasyQuizbutton.png");
const advancedButton = require("../assets/AdvancedQuiz.png");
const quizButton = require("../assets/Quiz.png");
const Quiz = () => {
  return (
    <div className="Quiz">
      <div className="quiz-button">
        <img src={quizButton} alt="QuizButton" />
        <p className="quiz-text">
          Test your knowledge with our quizzes! Start off with the easy quiz,
          and if you think you're ready, take our advanced quiz and see how you
          rank with others!
        </p>
      </div>
      <div className="button-container">
        <Link to="/easyquiz">
          <img src={eazyButton} alt="Easy-Button" className="easy-button" />
        </Link>
        <Link to="/advancedquiz">
          <img
            src={advancedButton}
            alt="Advanced-Button"
            className="advanced-button"
          />
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
