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
  const { user } = useContext(AuthContext);
  const [collection, setCollection] = useState<SingleArt[]>([]);

  const addCollection = (art: SingleArt): void => {
    addToUserCollection(user!.uid, art).then(() => {
      setCollection(user!.collections);
    });
  };

  const removeCollection = (uid: string, artName: string): void => {
    removeFromUserCollection(uid, artName).then(() => {
      setCollection(user!.collections);
    });
  };

  const isCollection = (name: string): boolean =>
    collection.some((art) => art.name === name);

  useEffect(() => {
    if (user) {
      setCollection(user.collections);
    }
  }, [user]);

  return (
    <CollectionContext.Provider
      value={{ collection, addCollection, removeCollection, isCollection }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionContextProvider;
