import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import QuizResponse from "../models/QuizResponse";
import { addQuizScore } from "../services/quizService";
import "./EasyQuiz.css";

const EasyQuiz = () => {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { user } = useContext(AuthContext);
  const name: string = user?.displayName || "Anonymous";

  const navigate = useNavigate();
  const Gallery5 = require("../assets/Gallery5.jpg");
  // const [art, setArt] = useState<SingleArt[]>([]);
  // useEffect(() => {
  //   getArtGallery().then((response) => {
  //     setArt(response);
  //   });
  // }, []);

  const questions = [
    {
      text: "Who painted the Academic Painting?",
      image: {},
      options: [
        { id: 0, text: "Pablo Picasso", isCorrect: false },
        { id: 1, text: "Raphael", isCorrect: false },
        { id: 2, text: "Leonardo da Vinci", isCorrect: true },
        { id: 3, text: "Artemisia Gentileschi", isCorrect: false },
      ],
    },
    {
      text: "Which of these art pieces has an unknown author to this day?",
      options: [
        { id: 0, text: "Basic Painting", isCorrect: false },
        { id: 1, text: "Familiar Statue", isCorrect: false },
        { id: 2, text: "Detailed Painting", isCorrect: false },
        { id: 3, text: "Ancient Statue", isCorrect: true },
      ],
    },
    {
      text: "What is the actual name of the Basic Painting?",
      options: [
        { id: 0, text: "The Blue Boy", isCorrect: true },
        { id: 1, text: "Jonathan Buttall", isCorrect: false },
        { id: 2, text: "Legacy", isCorrect: false },
        { id: 3, text: "Prissy Percy", isCorrect: false },
      ],
    },

    {
      text: "How can you tell if the Beautiful Statue is a forgery?",
      options: [
        { id: 0, text: "There are no forgeries.", isCorrect: false },
        {
          id: 1,
          text: "There are no necklaces around her neck.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "There are three necklaces around her neck.",
          isCorrect: true,
        },
        { id: 3, text: "She will have no arms.", isCorrect: false },
      ],
    },
    {
      text: "The Calm Painting does not have a forgery.",
      options: [
        { id: 0, text: "False", isCorrect: false },
        { id: 1, text: "True", isCorrect: true },
      ],
    },
    {
      text: "What year was the Dynamic Painting painted?",
      options: [
        { id: 0, text: "130 BCE", isCorrect: false },
        { id: 1, text: "1843", isCorrect: false },
        { id: 2, text: "1831", isCorrect: true },
        { id: 3, text: "1780", isCorrect: false },
      ],
    },

    {
      text: "The Famous Painting's true title is known as:",
      options: [
        { id: 0, text: "Mona Lisa", isCorrect: true },
        { id: 1, text: "Lona Misa", isCorrect: false },
        { id: 2, text: "Lisa Mona", isCorrect: false },
        { id: 3, text: "Misa Lona", isCorrect: false },
      ],
    },
    {
      text: "How can you tell if the Flowery Painting is a forgery?",
      options: [
        {
          id: 0,
          text: "The tallest flower has a green mark.",
          isCorrect: false,
        },
        { id: 1, text: "The vase has a square bottom.", isCorrect: false },
        {
          id: 2,
          text: "The painting does not have a forgery.",
          isCorrect: true,
        },
        { id: 3, text: "The stems are colored bright blue", isCorrect: false },
      ],
    },
    {
      text: "Twinkling Painting is famously known as what?",
      options: [
        { id: 0, text: "The Stars of the Village at Night", isCorrect: false },
        { id: 1, text: "The Starry Night", isCorrect: true },
        { id: 2, text: "The Swirling Stars", isCorrect: false },
        { id: 3, text: "A Star Over Paris", isCorrect: false },
      ],
    },
    {
      text: "What was the name of the painter that painted the Jolly Painting?",
      options: [
        { id: 0, text: "Leonardo Da Vinci", isCorrect: false },
        { id: 1, text: "Guiseppe Arcimboldo", isCorrect: true },
        { id: 2, text: "Unknown", isCorrect: false },
        { id: 3, text: "Arnold Böcklin", isCorrect: false },
      ],
    },
  ];

  const answerClicked = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="EasyQuiz">
      {/* Header */}
      <h1>Easy Quiz</h1>
      {/* Current Score */}
      {/* <h2>Current Score: {score}</h2> */}
      {showResults ? (
        /* 4. Final Results */
        <div className="results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => resetGame()}>Restart Game</button>
        </div>
      ) : (
        /* Question Card */
        <div className="questions">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          {/* <img src={} alt="image" /> */}
          <ul>
            <>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => answerClicked(option.isCorrect)}
                    className="noliststyle"
                  >
                    <button className="testing">{option.text}</button>
                  </li>
                );
              })}
            </>
          </ul>
        </div>
      )}
    </div>
  );
};

export default EasyQuiz;
