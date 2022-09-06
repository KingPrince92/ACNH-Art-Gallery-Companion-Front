import { createContext } from "react";
import SingleArt from "../models/SingleArt";

interface CollectionContextProvider {
  collection: SingleArt[];
  addCollection: (art: SingleArt) => void;
  removeCollection: (uid: string, artName: string) => void;
  isCollection: (name: string) => boolean;
}

const defaultValues: CollectionContextProvider = {
  collection: [],
  addCollection: () => {},
  removeCollection: () => {},
  isCollection: () => false,
};

const CollectionContext = createContext(defaultValues);

export default CollectionContext;
