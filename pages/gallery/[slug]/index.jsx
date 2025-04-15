import { useRouter } from "next/router";
import fetchArtPieces from "../../../scripts/APIClient";
import DetailPage from "@/components/DetailPage/DetailPage";

export default function GalleryDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = fetchArtPieces();

  if (error) return <div>Failed to load art pieces.</div>;
  if (isLoading || !data.length) return <div>Loading...</div>;

  const element = data.find((element) => element.slug === slug);

  return <DetailPage element={element} />;
}
