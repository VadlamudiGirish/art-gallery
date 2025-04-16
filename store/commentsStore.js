import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCommentStore = create(
  persist(
    (set) => ({
      comments: {},
      addComment: (slug, text) =>
        set((state) => {
          const newComment = {
            id: Date.now(),
            text,
            date: new Date().toISOString(),
          };

          return {
            comments: {
              ...state.comments,
              [slug]: [...(state.comments[slug] || []), newComment],
            },
          };
        }),
    }),
    {
      name: "art-comments-storage", // LocalStorage key
      getStorage: () => localStorage,
    }
  )
);
