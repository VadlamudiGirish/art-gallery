import { useEffect } from "react";
import { useRouter } from "next/router";
import { useHeaderStore } from "../../../store/headerStore";
import { useFooterStore } from "../../../store/footerStore";
import fetchArtPieces from "../../../scripts/APIClient";

export default function GalleryDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const setPageName = useHeaderStore((state) => state.setPageName);
  const { setSelected } = useFooterStore();

  useEffect(() => {
    if (slug) {
      setPageName(slug);
      setSelected("Gallery");
    }
  }, [slug, setPageName, setSelected]);

  const { data, error, isLoading } = fetchArtPieces();

  if (error) return <div>Failed to load art pieces.</div>;
  if (isLoading || !data.length) return <div>Loading...</div>;

  return <div>Gallery Details: {slug}</div>;
}
