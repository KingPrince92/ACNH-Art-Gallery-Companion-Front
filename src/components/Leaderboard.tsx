import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import QuizResponse from "../models/QuizResponse";
import { getQuizScores } from "../services/quizService";
import "./Leaderboard.css";

const Leaderboard = () => {
  const { user } = useContext(AuthContext);
  const [leaderboard, setLeaderboard] = useState<QuizResponse[]>([]);

  const getAndSetScores = () => {
    getQuizScores().then((response) => {
      setLeaderboard(response);
    });
  };

  useEffect(() => {
    getAndSetScores();
  }, []);

  return (
    <div className="Leaderboard">
      <h2>Art Quiz Leaderboard</h2>
      <table className="LeaderboardRanks">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((quizResult, index) => (
            <tr data-index={index} key={index}>
              <td className="scoreRow1">{index + 1}</td>
              <td className="scoreRow2">
                {quizResult.name}{" "}
                <img
                  className="userPhoto"
                  src={quizResult.photoURL}
                  alt="userphoto"
                ></img>
              </td>
              <td className="scoreRow3">
                {quizResult.score}/16 - {(quizResult.score / 16) * 100}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
