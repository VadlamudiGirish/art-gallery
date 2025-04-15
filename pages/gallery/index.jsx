import CardList from "@/components/CardList/CardList";
import fetchArtPieces from "../../scripts/APIClient";

export default function Gallery() {
  const apiResponse = fetchArtPieces();

  if (apiResponse.error) return <div>Failed to load art pieces.</div>;
  if (apiResponse.isLoading || !apiResponse.data) return <div>Loading...</div>;

  return (
    <>
      <CardList elements={apiResponse.data} elementName={"art-piece"} />
    </>
  );
}
