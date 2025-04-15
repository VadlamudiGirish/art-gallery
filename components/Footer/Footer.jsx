import { useEffect } from "react";
import { useRouter } from "next/router";
import { useFooterStore } from "../../store/footerStore";

export default function Navbar() {
  const router = useRouter();
  const { selected, setSelected, navigationItems } = useFooterStore();

  useEffect(() => {
    // Update selected state based on router's current path
    const current = navigationItems.find(
      (item) => item.href === router.pathname
    );
    if (current) {
      setSelected(current.name);
    }
  }, [router.pathname, navigationItems, setSelected]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 flex justify-center">
      <div className="flex justify-center gap-x-6 flex-wrap">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              router.push(item.href);
              setSelected(item.name);
            }}
            className={`relative block rounded-md border p-3 text-center transition-colors duration-200 ${
              selected === item.name
                ? "border-blue-500 text-blue-500"
                : "border-gray-700 text-gray-400 hover:text-gray-300"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
