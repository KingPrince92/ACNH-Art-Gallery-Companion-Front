import { useState, ReactNode, useContext, useEffect } from "react";
import SingleArt from "../models/SingleArt";
import {
  addToUserCollection,
  removeFromUserCollection,
} from "../services/userService";
import AuthContext from "./AuthContext";
import CollectionContext from "./CollectionContext";

interface Props {
  children: ReactNode;
}

const CollectionContextProvider = ({ children }: Props) => {
  const { user, currentUserProfile, updateUserProfiles } =
    useContext(AuthContext);
  const [collection, setCollection] = useState<SingleArt[]>([]);

  const addCollection = (art: SingleArt): void => {
    addToUserCollection(user!.uid, art).then(() => {
      setCollection(currentUserProfile!.collections);
      updateUserProfiles();
    });
  };

  const removeCollection = (uid: string, artName: string): void => {
    removeFromUserCollection(uid, artName).then(() => {
      setCollection(currentUserProfile!.collections);
      updateUserProfiles();
    });
  };
  const isCollection = (name: string): boolean =>
    collection.some((art) => art.name === name);

  useEffect(() => {
    if (currentUserProfile) {
      setCollection(currentUserProfile.collections);
      updateUserProfiles();
    }
  }, [currentUserProfile]);

  return (
    <CollectionContext.Provider
      value={{ collection, addCollection, removeCollection, isCollection }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionContextProvider;
