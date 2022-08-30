import { useState } from "react";
import "./Quiz.css";

const Quiz = () => {
  const [showResults, setShowReults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Who painted the Academic Painting?",
      options: [
        { id: 0, text: "Pablo Picasso", isCorrect: false },
        { id: 1, text: "Raphael", isCorrect: false },
        { id: 2, text: "Leonardo da Vinci", isCorrect: true },
        { id: 3, text: "Artemisia Gentileschi", isCorrect: false },
      ],
    },
    {
      text: "What time of the day was Amazing Painting meant to be seen?",
      options: [
        { id: 0, text: "Late evening", isCorrect: false },
        { id: 1, text: "Daytime", isCorrect: true },
        { id: 2, text: "Midnight", isCorrect: false },
        { id: 3, text: "Early morning", isCorrect: false },
      ],
    },
    {
      text: "Which art piece has an unknown author to this day?",
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
      text: "The Calm Painting does not have a forgery.?",
      options: [
        { id: 0, text: "False", isCorrect: false },
        { id: 1, text: "True", isCorrect: true },
      ],
    },
    {
      text: "The Common Painting was known for depicting the lives of whom?",
      options: [
        { id: 0, text: "Farmers", isCorrect: false },
        { id: 1, text: "Women", isCorrect: false },
        { id: 2, text: "Commoners", isCorrect: true },
        { id: 3, text: "Men", isCorrect: false },
      ],
    },
    {
      text: "Who painted the Detailed Painting?",
      options: [
        { id: 0, text: "Hokusai", isCorrect: false },
        { id: 1, text: "Utamaro", isCorrect: false },
        { id: 2, text: "Yasumasa Morimura", isCorrect: false },
        { id: 3, text: "Ito Jakuchu", isCorrect: true },
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
      text: "Where is the famous original Familiar Statue located?",
      options: [
        { id: 0, text: "Greece", isCorrect: false },
        { id: 1, text: "France", isCorrect: true },
        { id: 2, text: "Italy", isCorrect: true },
        { id: 3, text: "America", isCorrect: false },
      ],
    },
    {
      text: "The Famous Painting is known as:",
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
        { id: 3, text: "The stems are green.", isCorrect: false },
      ],
    },
    {
      text: "How long did Michelangelo take to sculpt the Gallant Statue?",
      options: [
        { id: 0, text: "9 days", isCorrect: false },
        { id: 1, text: "3 years", isCorrect: true },
        { id: 2, text: "3 weeks", isCorrect: false },
        { id: 3, text: "7 years", isCorrect: false },
      ],
    },
    {
      text: "Twinkling Painting is famously known as what?",
      options: [
        { id: 0, text: "The Stars of the Night", isCorrect: false },
        { id: 1, text: "The Starry Night", isCorrect: true },
        { id: 2, text: "The Night is Starry", isCorrect: false },
        { id: 3, text: "You gotta know this.", isCorrect: false },
      ],
    },
    {
      text: "Who is the woman in the Worthy Painting mistaken for?",
      options: [
        { id: 0, text: "Mariah Carey", isCorrect: false },
        { id: 1, text: "Joan of Arc", isCorrect: true },
        { id: 2, text: "Aretha Franklin", isCorrect: false },
        { id: 3, text: "Britney Spears", isCorrect: false },
      ],
    },

    {
      text: "What did the Informative Statue help with?",
      options: [
        {
          id: 0,
          text: "Taught us the whip and the Nae-Nae.",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Decipher ancient Egyptian hieroglyphs.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Answered if there are more wheels or doors on Earth.",
          isCorrect: false,
        },
        { id: 3, text: "Introduced the chicken parm.", isCorrect: false },
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
      setShowReults(true);
    }
  };

  const resetGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowReults(false);
  };

  return (
    <div className="Quiz">
      {/* Header */}
      <h1>Art Quiz</h1>
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

          <ul>
            <>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    className="answers"
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

export default Quiz;
