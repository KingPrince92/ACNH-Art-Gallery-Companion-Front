import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import QuizResponse from "../models/QuizResponse";
import { getQuizScores } from "../services/quizService";
import "./Leaderboard.css";

const Leaderboard = () => {
  const { user } = useContext(AuthContext);
  const [leaderboard, setLeaderboard] = useState<QuizResponse[]>([]);
  const displayName: string | null | undefined = user?.displayName;

  const getAndSetScores = () => {
    getQuizScores().then((response) => {
      setLeaderboard(response);
    });
  };
  useEffect(() => {
    getAndSetScores();
  }, [leaderboard]);

  return (
    <div className="Leaderboard">
      <table className="LeaderboardRanks">
        <h2>Art Quiz Leaderboard</h2>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {leaderboard.map((quizResult, index) => (
          <tr data-index={index}>
            <td className="scoreRow1">{index + 1}</td>
            <td className="scoreRow2">
              {quizResult.name}{" "}
              <img
                className="userPhoto"
                src={quizResult.photoURL}
                alt="userphoto"
              ></img>
            </td>
            <td className="scoreRow3">{quizResult.score}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Leaderboard;
