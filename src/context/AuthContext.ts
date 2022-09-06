import { User } from "firebase/auth";
import { createContext } from "react";
import UserProfile from "../models/userResponse";
export interface AuthContextModel {
  user: User | null; // null when not logged in
  profiles: UserProfile[];
  currentUserProfile: UserProfile | null;
  updateUserProfiles: () => void;
}
const defaultValue: AuthContextModel = {
  user: null,
  profiles: [],
  currentUserProfile: null,
  updateUserProfiles: () => {},
};
const AuthContext = createContext(defaultValue);
export default AuthContext;
