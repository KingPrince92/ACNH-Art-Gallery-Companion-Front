import { createContext } from "react";
import SingleArt from "../models/SingleArt";
import UserProfile from "../models/userResponse";

export interface AuthContextModel {
  user: UserProfile | null; // null when not logged in
  collection: SingleArt[];
  addCollection: (art: SingleArt) => void;
  removeCollection: (uid: string, artName: string) => void;
  isCollection: (name: string) => boolean;
  wishlist: SingleArt[];
  addWishlist: (art: SingleArt) => void;
  removeWishlist: (uid: string, artName: string) => void;
  isWishlist: (name: string) => boolean;
}
const defaultValue: AuthContextModel = {
  user: null,
  collection: [],
  addCollection: () => {},
  removeCollection: () => {},
  isCollection: () => false,
  wishlist: [],
  addWishlist: () => {},
  removeWishlist: () => {},
  isWishlist: () => false,
};
const AuthContext = createContext(defaultValue);
export default AuthContext;

// updateUserProfiles: () => void;
