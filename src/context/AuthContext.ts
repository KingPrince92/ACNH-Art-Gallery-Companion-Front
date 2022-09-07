import { createContext } from "react";
import UserProfile from "../models/userResponse";

export interface AuthContextModel {
  user: UserProfile | null; // null when not logged in
}
const defaultValue: AuthContextModel = {
  user: null,
};
const AuthContext = createContext(defaultValue);
export default AuthContext;

// updateUserProfiles: () => void;
