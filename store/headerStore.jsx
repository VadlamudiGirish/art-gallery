import { create } from "zustand";

export const useHeaderStore = create((set) => ({
  pageName: "Gallery",
  setPageName: (name) => set({ pageName: name }),
}));
