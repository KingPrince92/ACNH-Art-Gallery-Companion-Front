import { createContext } from "react";
import SingleArt from "../models/SingleArt";

interface WishlistContextProvider {
  wishlist: SingleArt[];
  addWishlist: (art: SingleArt) => void;
  removeWishlist: (uid: string, artName: string) => void;
  isWishlist: (name: string) => boolean;
}

const defaultValues: WishlistContextProvider = {
  wishlist: [],
  addWishlist: () => {},
  removeWishlist: () => {},
  isWishlist: () => false,
};

const WishlistContext = createContext(defaultValues);

export default WishlistContext;
