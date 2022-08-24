import axios from "axios";
import SingleArt from "../models/SingleArt";

const baseURL: string = "https://api.nookipedia.com/nh/art";
const key: string = process.env.REACT_APP_API_KEY || "";

export const getArtGallery = async (): Promise<SingleArt[]> => {
  return (await axios.get(`${baseURL}`, { params: { api_key: key } })).data;
};
