import Spotlight from "@/components/Spotlight/Spotlight";
import fetchArtPieces from "../scripts/APIClient";
import { useHeaderStore } from "../store/headerStore";
import { useEffect } from "react";

export default function SpotLight() {
  const setPageName = useHeaderStore((state) => state.setPageName);

  useEffect(() => {
    setPageName("Spotlight");
  }, [setPageName]);

  const apiResponse = fetchArtPieces();

  if (apiResponse.error) return <div>Failed to load art pieces.</div>;
  if (apiResponse.isLoading || !apiResponse.data) return <div>Loading...</div>;

  function getRandomIntInclusive(min, max = 10) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const randomIndex = getRandomIntInclusive(0, apiResponse.data.length - 1);
  const element = apiResponse.data[randomIndex];

  return <Spotlight element={element} />;
}
