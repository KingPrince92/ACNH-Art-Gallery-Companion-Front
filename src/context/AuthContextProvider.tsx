import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import { addUserProfile, getUsers } from "../services/userService";
import UserProfile from "../models/userResponse";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [currentUserProfile, setCurrentUserProfile] =
    useState<UserProfile | null>(null);

  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  }, []);

  useEffect(() => {
    getUsers().then((response) => {
      setProfiles(response);
    });
  }, [user]);

  useEffect(() => {
    if (user && profiles) {
      const found: UserProfile | undefined = profiles.find(
        (profile) => profile.uid === user.uid
      );
      if (found) {
        setCurrentUserProfile(found);
      } else {
        const newUser: UserProfile = {
          uid: user.uid,
          displayName: user.displayName!,
          photoURL: user.photoURL!,
          collections: [],
          quizScore: [],
        };
        addUserProfile(newUser).then(() => setCurrentUserProfile(newUser));
      }
    }
  }, [profiles]);

  const updateUserProfiles = (): void => {
    getUsers().then((response) => {
      setProfiles(response);
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, profiles, currentUserProfile, updateUserProfiles }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
