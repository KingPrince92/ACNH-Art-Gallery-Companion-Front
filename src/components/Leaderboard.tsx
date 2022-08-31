import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import QuizResponse from "../models/QuizResponse";
import { getQuizScores } from "../services/quizService";
import "./Leaderboard.css";

const Leaderboard = () => {
  const { user } = useContext(AuthContext);
  const [leaderboard, setLeaderboard] = useState<QuizResponse[]>([]);
  const displayName: string | null | undefined = user?.displayName;
  // const quizScore: string | null | undefined = user?.score;
  const getAndSetScores = () => {
    getQuizScores().then((response) => {
      setLeaderboard(response);
    });
  };
  useEffect(() => {
    getAndSetScores();
  }, [leaderboard]);

  return <div className="Leaderboard"></div>;
};

export default Leaderboard;
