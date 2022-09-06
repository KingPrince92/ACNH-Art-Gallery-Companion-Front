import axios from "axios";
import SingleArt from "../models/SingleArt";
import UserProfile from "../models/userResponse";

const baseURL: string = process.env.REACT_APP_API_URL || "";

//User is added with every log in
export const addUserProfile = async (
  userProfile: UserProfile
): Promise<UserProfile> => {
  return (await axios.post(`${baseURL}/guestbook`, userProfile)).data;
};

export const getUsers = async (): Promise<UserProfile[]> => {
  return (await axios.get(`${baseURL}/guestbook`)).data;
};

export const addToUserCollection = async (
  uid: string,
  artPiece: SingleArt
): Promise<SingleArt> => {
  return (
    await axios.put(`${baseURL}/guestbook/${encodeURIComponent(uid)}`, artPiece)
  ).data;
};

export const removeFromUserCollection = async (
  uid: string,
  artName: string
): Promise<string> => {
  return (
    await axios.put(`${baseURL}/guestbook/remove/${encodeURIComponent(uid)}`, {
      name: artName,
    })
  ).data;
};
