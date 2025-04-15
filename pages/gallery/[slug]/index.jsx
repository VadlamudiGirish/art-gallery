import { useRouter } from "next/router";
import fetchArtPieces from "../../../scripts/APIClient";

export default function GalleryDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = fetchArtPieces();

  if (error) return <div>Failed to load art pieces.</div>;
  if (isLoading || !data.length) return <div>Loading...</div>;

  return <div>Gallery Details: {slug}</div>;
}
