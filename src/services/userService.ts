import axios from "axios";
import SingleArt from "../models/SingleArt";
import UserProfile from "../models/userResponse";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getUser = async (uid: string): Promise<UserProfile> => {
  return (await axios.get(`${baseURL}/guestbook/${encodeURIComponent(uid)}`))
    .data;
};
export const getMultiUsers = async (uid: string): Promise<UserProfile[]> => {
  return (await axios.get(`${baseURL}/guestbook/${encodeURIComponent(uid)}`))
    .data;
};

//User is added with every log in
export const addUserProfile = async (
  userProfile: UserProfile
): Promise<UserProfile> => {
  return (await axios.post(`${baseURL}/guestbook`, userProfile)).data;
};

export const addToUserCollection = async (
  uid: string,
  artPiece: SingleArt
): Promise<SingleArt> => {
  return (
    await axios.put(
      `${baseURL}/guestbook/collect/${encodeURIComponent(uid)}`,
      artPiece
    )
  ).data;
};

export const removeFromUserCollection = async (
  uid: string,
  artName: string
): Promise<string> => {
  return (
    await axios.put(
      `${baseURL}/guestbook/collect/remove/${encodeURIComponent(uid)}`,
      {
        name: artName,
      }
    )
  ).data;
};

export const removeFromUserWishlist = async (
  uid: string,
  artName: string
): Promise<string> => {
  return (
    await axios.put(
      `${baseURL}/guestbook/wishlist/remove/${encodeURIComponent(uid)}`,
      {
        name: artName,
      }
    )
  ).data;
};
export const addToUserWishlist = async (
  uid: string,
  artPiece: SingleArt
): Promise<SingleArt> => {
  return (
    await axios.put(
      `${baseURL}/guestbook/wishlist/${encodeURIComponent(uid)}`,
      artPiece
    )
  ).data;
};
