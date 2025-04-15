import useSWR from "swr";

export default function fetchArtPieces() {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  };

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  return { data, error, isLoading };
}
