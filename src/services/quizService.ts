import axios from "axios";
import QuizResponse from "../models/QuizResponse";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getQuizScores = async (): Promise<QuizResponse[]> => {
  return (await axios.get(baseURL)).data;
};

export const addQuizScore = async (
  quizScore: QuizResponse
): Promise<QuizResponse> => {
  return (await axios.post(baseURL, quizScore)).data;
};
