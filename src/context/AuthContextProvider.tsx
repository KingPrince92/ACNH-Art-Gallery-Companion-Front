import { ReactNode, useEffect, useState } from "react";

import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import { addUserProfile, getUser } from "../services/userService";
import UserProfile from "../models/userResponse";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((newUser) => {
      // setUser(newUser);
      if (newUser) {
        getUser(newUser.uid).then((response) => {
          if (response === null) {
            const newPerson = {
              uid: newUser.uid,
              displayName: newUser.displayName!,
              photoURL: newUser.photoURL!,
              collections: [],
              wishlist: [],
            };

            addUserProfile(newPerson);
            setUser(newPerson);
          } else {
            setUser(response);
          }
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
export default AuthContextProvider;

// useEffect(() => {
//   if (user && profiles) {
//     const found: UserProfile | undefined = profiles.find(
//       (profile) => profile.uid === user.uid
//     );
//     if (found) {
//       setCurrentUserProfile(found);
//     } else {
//       const newUser: UserProfile = {
//         uid: user.uid,
//         displayName: user.displayName!,
//         photoURL: user.photoURL!,
//         collections: [],
//         wishlist: [],
//       };
//       addUserProfile(newUser).then(() => setCurrentUserProfile(newUser));
//     }
//   }
// }, [profiles]);

// const updateUserProfiles = (): void => {
//   getUsers().then((response) => {
//     setProfiles(response);
//   });
// };
