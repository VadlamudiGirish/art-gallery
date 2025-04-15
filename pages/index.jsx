import { useEffect } from "react";
import Spotlight from "@/components/Spotlight/Spotlight";
import fetchArtPieces from "../scripts/APIClient";
import { useHeaderStore } from "../store/headerStore";

export default function SpotLight() {
  const { data, error, isLoading } = fetchArtPieces();
  const setPageName = useHeaderStore((state) => state.setPageName);

  useEffect(() => {
    setPageName("Spotlight");
  }, [setPageName]);

  if (error) return <div>Failed to load art pieces.</div>;
  if (isLoading || !data.length) return <div>Loading...</div>;

  function getRandomIntInclusive(min, max = 10) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const randomIndex = getRandomIntInclusive(0, data.length - 1);
  const element = data[randomIndex];

  return <Spotlight element={element} />;
}
