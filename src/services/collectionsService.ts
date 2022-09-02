import axios from "axios";
import SingleArt from "../models/SingleArt";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const addToCollection = async (
  collection: SingleArt
): Promise<SingleArt> => {
  return (await axios.post(`${baseURL}/guestbook`, collection)).data;
};

export const getArtByUID = async (uid: string): Promise<SingleArt[]> => {
  return (await axios.get(`${baseURL}/guestbook/${encodeURIComponent(uid)}`))
    .data;
};

export const deleteFromCollection = async (
  name: string,
  uid: string
): Promise<void> => {
  return (
    await axios.delete(
      `${baseURL}/guestbook/${encodeURIComponent(
        name
      )}/user/${encodeURIComponent(uid)}`
    )
  ).data;
};
