import { useRouter } from "next/router";

const TITLE_MAP = {
  "/": "Spotlight",
  "/gallery": "Gallery",
  "/favorites": "Favorites",
};

export default function Header() {
  const router = useRouter();
  const title = router.pathname.startsWith("/gallery/")
    ? "Art work details"
    : TITLE_MAP[router.pathname] || "Art Gallery";

  return (
    <header className="bg-gray-900 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
      </div>
    </header>
  );
}
