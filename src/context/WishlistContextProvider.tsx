import { useState, ReactNode, useContext, useEffect } from "react";
import SingleArt from "../models/SingleArt";
import {
  addToUserWishlist,
  removeFromUserWishlist,
} from "../services/userService";
import AuthContext from "./AuthContext";
import WishlistContext from "./WishlistContext";

interface Props {
  children: ReactNode;
}

const WishlistContextProvider = ({ children }: Props) => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState<SingleArt[]>([]);

  const addWishlist = (art: SingleArt): void => {
    addToUserWishlist(user!.uid, art).then(() => {
      setWishlist(user!.wishlist);
    });
  };

  const removeWishlist = (uid: string, artName: string): void => {
    removeFromUserWishlist(uid, artName).then(() => {
      setWishlist(user!.wishlist);
    });
  };
  const isWishlist = (name: string): boolean =>
    wishlist.some((art) => art.name === name);

  useEffect(() => {
    if (user) {
      setWishlist(user.wishlist);
    }
  }, [user]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addWishlist, removeWishlist, isWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
