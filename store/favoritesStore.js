import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoritesStore = create(
  persist(
    (set) => ({
      favorites: {},
      toggleFavorite: (artPiece) =>
        set((state) => {
          if (state.favorites[artPiece.slug]) {
            const { [artPiece.slug]: removed, ...rest } = state.favorites;
            return { favorites: rest };
          } else {
            return {
              favorites: { ...state.favorites, [artPiece.slug]: artPiece },
            };
          }
        }),
    }),
    {
      name: "favorites-storage",
    }
  )
);

export default useFavoritesStore;
