import CardList from "@/components/CardList/CardList";
import useSWR from "swr";

export default function ArtPieces() {
  async function fetcher(url) {
    const response = await fetch(url);
    return await response.json();
  }

  const { data: art_pieces } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  return (
    <>
      <CardList elements={art_pieces} elementName={"art-pieces"} />
    </>
  );
}
