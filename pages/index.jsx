import CardList from "@/components/CardList/CardList";
import Spotlight from "@/components/Spotlight/Spotlight";
import useSWR from "swr";

export default function SpotLight() {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  };

  const {
    data: art_pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <div>Failed to load art pieces.</div>;
  if (isLoading || !art_pieces) return <div>Loading...</div>;

  function getRandomIntInclusive(min, max = 10) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const randomIndex = getRandomIntInclusive(0, art_pieces.length - 1);
  const element = art_pieces[randomIndex];

  return <Spotlight element={element} />;
}
