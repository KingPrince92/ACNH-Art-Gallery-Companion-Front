import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import QuizResponse from "../models/QuizResponse";
import { addQuizScore } from "../services/quizService";
import "./HardQuiz.css";

const HardQuiz = () => {
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
      text: "What time of the day was Amazing Painting meant to be seen?",
      options: [
        { id: 0, text: "Late evening", isCorrect: false },
        { id: 1, text: "Daytime", isCorrect: true },
        { id: 2, text: "Midnight", isCorrect: false },
        { id: 3, text: "Early morning", isCorrect: false },
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
      text: "Where is the famous original Familiar Statue located?",
      options: [
        { id: 0, text: "Greece", isCorrect: false },
        { id: 1, text: "France", isCorrect: true },
        { id: 2, text: "Italy", isCorrect: false },
        { id: 3, text: "America", isCorrect: false },
      ],
    },

    {
      text: "How long did Michelangelo take to sculpt the Gallant Statue?",
      options: [
        { id: 0, text: "9 days", isCorrect: false },
        { id: 1, text: "3 years", isCorrect: true },
        { id: 2, text: "15 weeks", isCorrect: false },
        { id: 3, text: "7 years", isCorrect: false },
      ],
    },

    {
      text: "Who is the woman in the Worthy Painting mistaken for?",
      options: [
        { id: 0, text: "Queen Elizabeth", isCorrect: false },
        { id: 1, text: "Joan of Arc", isCorrect: true },
        { id: 2, text: "Frida Kahlo", isCorrect: false },
        { id: 3, text: "Élisabeth Vigée Le Brun", isCorrect: false },
      ],
    },

    {
      text: "What did the Informative Statue help with?",
      options: [
        {
          id: 0,
          text: "Gave directions across Scotland.",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Decipher ancient Egyptian hieroglyphs.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Detailed 5 of the 10 commandments.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Blueprint to build the trojan horse.",
          isCorrect: false,
        },
      ],
    },
    {
      text: "What is Wistful Painting also known as?",
      options: [
        { id: 0, text: "Girl with a Pearl Earring", isCorrect: false },
        { id: 1, text: "Girl with a Blue Turban", isCorrect: false },
        { id: 2, text: "Girl with the Blue Eyes", isCorrect: false },
        { id: 3, text: "Girl with a Turban", isCorrect: true },
      ],
    },

    {
      text: "What art style does the Wild Painting Right Half use?",
      options: [
        { id: 0, text: "Golf leaf and ink on paper", isCorrect: true },
        { id: 1, text: "Oil on Canvas", isCorrect: false },
        { id: 2, text: "Earthenware", isCorrect: false },
        { id: 3, text: "Basalt", isCorrect: false },
      ],
    },

    {
      text: "What was the artist of the Scenic Painting also known as?",
      options: [
        { id: 0, text: "The Elder", isCorrect: false },
        { id: 1, text: "Peasant Artist", isCorrect: true },
        { id: 2, text: "Pieter Brueghel", isCorrect: false },
        { id: 3, text: "Pieter Brueghel the Elder", isCorrect: false },
      ],
    },

    {
      text: "The Serene Painting was one of how many portraits of women painted by Leonardo Da Vinci?",
      options: [
        { id: 0, text: "3", isCorrect: false },
        { id: 1, text: "2", isCorrect: false },
        { id: 2, text: "8", isCorrect: false },
        { id: 3, text: "4", isCorrect: true },
      ],
    },

    {
      text: "The Sinking Painting is of the tragic figure of which Shakespearan plays?",
      options: [
        { id: 0, text: "Hamlet", isCorrect: true },
        { id: 1, text: "Macbeth", isCorrect: false },
        { id: 2, text: "Romeo and Juliet", isCorrect: false },
        { id: 3, text: "Julius Caesar", isCorrect: false },
      ],
    },

    {
      text: "What major revolution was going on when the Worth Painting was painted?",
      options: [
        { id: 0, text: "The American Revolutionary War", isCorrect: false },
        { id: 1, text: "The French Revolution", isCorrect: true },
        { id: 2, text: "The Revolutionary War", isCorrect: false },
        { id: 3, text: "The Revolutionary Emu War", isCorrect: false },
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

  const addAndSeeLeaderboard = () => {
    const newQuizScore: QuizResponse = {
      photoURL: user!.photoURL!,
      name,
      score,
    };
    addQuizScore(newQuizScore);
    navigate("/leaderboard");
  };

  return (
    <div className="HardQuiz">
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
          <button onClick={addAndSeeLeaderboard}>
            Add your score, and View Leaderboard
          </button>
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

export default HardQuiz;
