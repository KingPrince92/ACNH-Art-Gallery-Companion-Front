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
  const { user, currentUserProfile, updateUserProfiles } =
    useContext(AuthContext);
  const [wishlist, setWishlist] = useState<SingleArt[]>([]);

  const addWishlist = (art: SingleArt): void => {
    addToUserWishlist(user!.uid, art).then(() => {
      setWishlist(currentUserProfile!.wishlist);
      updateUserProfiles();
    });
  };

  const removeWishlist = (uid: string, artName: string): void => {
    removeFromUserWishlist(uid, artName).then(() => {
      setWishlist(currentUserProfile!.wishlist);
      updateUserProfiles();
    });
  };
  const isWishlist = (name: string): boolean =>
    wishlist.some((art) => art.name === name);

  useEffect(() => {
    if (currentUserProfile) {
      setWishlist(currentUserProfile.wishlist);
      updateUserProfiles();
    }
  }, [currentUserProfile]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addWishlist, removeWishlist, isWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
