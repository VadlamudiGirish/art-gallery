import useSWR from "swr";

const API_URL = "https://example-apis.vercel.app/api/art";

export default function fetchArtPieces() {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  return useSWR(API_URL, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    dedupingInterval: 3600000,
  });
}
