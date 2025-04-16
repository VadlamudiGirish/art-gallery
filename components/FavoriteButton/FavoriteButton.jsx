import useFavoritesStore from "@/store/favoritesStore";

export default function FavoriteButton({ artPiece }) {
  // Get favorites and toggleFavorite from the store.
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFavorite = !!favorites[artPiece.slug];

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // In case this button is inside a Link.
        toggleFavorite(artPiece);
      }}
      className={`flex items-center gap-2 px-4 py-2 rounded-md focus:outline-none 
        ${
          isFavorite
            ? "bg-red-600 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
    >
      {isFavorite ? (
        // Filled heart icon for favorited art piece
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 
            7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
            19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      ) : (
        // Outlined heart icon for non-favorited art piece
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 
              0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 
              3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      )}
    </button>
  );
}
