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
    addToCollection(art).then(() => {
      getAndSetCollection(user!.uid);
    });
  };

  const removeCollection = (_id: string, uid: string): void => {
    console.log(_id);
    deleteFromCollection(_id, uid).then(() => {
      getArtByUID(uid).then(() => {
        getAndSetCollection(uid);
      });
    });
  };
  const isCollection = (_id: string): boolean =>
    collection.some((art) => art._id === _id);

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
