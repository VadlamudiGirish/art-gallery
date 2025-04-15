import CardList from "@/components/CardList/CardList";
import fetchArtPieces from "../../scripts/APIClient";

export default function Gallery() {
  const { data, error, isLoading } = fetchArtPieces();

  if (error) return <div>Failed to load art pieces.</div>;
  if (isLoading || !data.length) return <div>Loading...</div>;

  return <CardList elements={data} elementName={"gallery"} />;
}
