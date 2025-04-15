import CardList from "@/components/CardList/CardList";
import fetchArtPieces from "../../scripts/APIClient";
import { useHeaderStore } from "../../store/headerStore";
import { useEffect } from "react";

export default function Gallery() {
  const setPageName = useHeaderStore((state) => state.setPageName);

  useEffect(() => {
    setPageName("Gallery");
  }, [setPageName]);

  const apiResponse = fetchArtPieces();

  if (apiResponse.error) return <div>Failed to load art pieces.</div>;
  if (apiResponse.isLoading || !apiResponse.data) return <div>Loading...</div>;

  return (
    <>
      <CardList elements={apiResponse.data} elementName={"art-piece"} />
    </>
  );
}
