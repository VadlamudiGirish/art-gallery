import { create } from "zustand";

export const useFooterStore = create((set) => ({
  selected: "Spotlight",
  navigationItems: [
    { name: "Spotlight", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Favorites", href: "/favorites" },
  ],
  setSelected: (selected) => set({ selected }),
}));
