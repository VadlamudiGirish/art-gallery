import useFavoritesStore from "@/store/favoritesStore";
import CardList from "@/components/CardList/CardList";

export default function Favorites() {
  const { favorites } = useFavoritesStore();
  const favoriteArtPieces = Object.values(favorites);

  if (favoriteArtPieces.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>You haven’t favorited any art pieces yet!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CardList elements={favoriteArtPieces} elementName="gallery" />
    </div>
  );
}
