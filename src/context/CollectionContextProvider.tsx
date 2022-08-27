import { useState, ReactNode, useContext, useEffect } from "react";
import SingleArt from "../models/SingleArt";
import {
  addToCollection,
  deleteFromCollection,
  getArtByUID,
} from "../services/collectionsService";
import AuthContext from "./AuthContext";
import CollectionContext from "./CollectionContext";

interface Props {
  children: ReactNode;
}

const CollectionContextProvider = ({ children }: Props) => {
  const { user } = useContext(AuthContext);
  const [collection, setCollection] = useState<SingleArt[]>([]);

  const getAndSetCollection = (uid: string): void => {
    getArtByUID(uid).then((response) => {
      setCollection(response);
    });
  };

  const addCollection = (art: SingleArt): void => {
    console.log(art);
    addToCollection(art).then(() => {
      getAndSetCollection(user!.uid);
    });
  };

  const removeCollection = (name: string, uid: string): void => {
    deleteFromCollection(name, uid).then(() => {
      getArtByUID(uid).then(() => {
        getAndSetCollection(uid);
      });
    });
  };
  const isCollection = (name: string): boolean =>
    collection.some((art) => art.name === name);

  useEffect(() => {
    if (user) {
      getAndSetCollection(user.uid);
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