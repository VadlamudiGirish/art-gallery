import { useEffect } from "react";
import CardList from "@/components/CardList/CardList";
import fetchArtPieces from "../../scripts/APIClient";
import { useHeaderStore } from "../../store/headerStore";

export default function Gallery() {
  const { data, error, isLoading } = fetchArtPieces();
  const setPageName = useHeaderStore((state) => state.setPageName);

  useEffect(() => {
    setPageName("Gallery");
  }, [setPageName]);

  if (error) return <div>Failed to load art pieces.</div>;
  if (isLoading || !data.length) return <div>Loading...</div>;

  return <CardList elements={data} elementName={"gallery"} />;
}
