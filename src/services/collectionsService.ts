import axios from "axios";
import SingleArt from "../models/SingleArt";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const addToCollection = async (
  collection: SingleArt
): Promise<SingleArt> => {
  console.log(collection);
  return (await axios.post(baseURL, collection)).data;
};

export const getArtByUID = async (uid: string): Promise<SingleArt[]> => {
  return (await axios.get(`${baseURL}/${encodeURIComponent(uid)}`)).data;
};

export const deleteFromCollection = async (
  _id: string,
  uid: string
): Promise<void> => {
  return (
    await axios.delete(
      `${baseURL}/${encodeURIComponent(_id)}/user/${encodeURIComponent(uid)}`
    )
  ).data;
};
