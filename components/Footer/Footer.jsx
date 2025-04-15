import Link from "next/link";
import { useRouter } from "next/router";

const NAV_ITEMS = [
  { name: "Spotlight", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Favorites", href: "/favorites" },
];

export default function Footer() {
  const router = useRouter();

  return (
    <nav className="bg-gray-900 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-center gap-2 sm:gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${
                  router.pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
