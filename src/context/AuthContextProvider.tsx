import { ReactNode, useEffect, useState } from "react";

import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import {
  addToUserCollection,
  addToUserWishlist,
  addUserProfile,
  getUser,
  removeFromUserCollection,
  removeFromUserWishlist,
} from "../services/userService";
import UserProfile from "../models/userResponse";
import SingleArt from "../models/SingleArt";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [collection, setCollection] = useState<SingleArt[]>([]);
  const [wishlist, setWishlist] = useState<SingleArt[]>([]);

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
            setCollection(newPerson.collections);
          } else {
            setUser(response);
            setCollection(user!.collections);
          }
        });
      } else {
        setUser(null);
        setCollection([]);
      }
    });
  }, []);
  const getAndSetUser = (uid: string): void => {
    getUser(uid).then((response) => setUser(response));
  };

  const addCollection = (art: SingleArt): void => {
    addToUserCollection(user!.uid, art).then(() => {
      getAndSetUser(user!.uid);
    });
  };

  const removeCollection = (uid: string, artName: string): void => {
    removeFromUserCollection(uid, artName).then(() => {
      getAndSetUser(user!.uid);
    });
  };

  const isCollection = (name: string): boolean =>
    collection.some((art) => art.name === name);

  const addWishlist = (art: SingleArt): void => {
    addToUserWishlist(user!.uid, art).then(() => {
      getAndSetUser(user!.uid);
    });
  };

  const removeWishlist = (uid: string, artName: string): void => {
    removeFromUserWishlist(uid, artName).then(() => {
      getAndSetUser(user!.uid);
    });
  };
  const isWishlist = (name: string): boolean =>
    wishlist.some((art) => art.name === name);

  useEffect(() => {
    if (user) {
      setCollection(user.collections);
      setWishlist(user.wishlist);
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        collection,
        isCollection,
        removeCollection,
        addCollection,
        wishlist,
        addWishlist,
        removeWishlist,
        isWishlist,
      }}
    >
      {children}
    </AuthContext.Provider>
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
