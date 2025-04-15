import { create } from "zustand";

export const useArtStore = create((set) => ({
  artPieces: [],
  setArtPieces: (artPieces) => set({ artPieces }),
}));
