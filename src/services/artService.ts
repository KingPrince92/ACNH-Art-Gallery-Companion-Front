import axios from "axios";
import SingleArt from "../models/SingleArt";

const baseURL: string = "https://api.nookipedia.com/nh/art";
const key: string = process.env.REACT_APP_API_KEY || "";

export const getArtGallery = async (): Promise<SingleArt[]> => {
  return (
    await axios.get(`${baseURL}`, {
      headers: { "X-API-KEY": key, "Accept-Version": `1.0.0` },
    })
  ).data;
};

export const getArtByName = async (name: string): Promise<SingleArt> => {
  return (
    await axios.get(`${baseURL}/${encodeURIComponent(name)}`, {
      headers: { "X-API-KEY": key, "Accept-Version": `1.0.0` },
    })
  ).data;
};

// export const searchArtByName = async (name: string): Promise<SingleArt[]> => {
//   return await axios.get(`${baseURL}/search/${encodeURIComponent(name)}`);
// };
