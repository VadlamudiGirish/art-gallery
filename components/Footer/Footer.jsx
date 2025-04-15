import { useState } from "react";

const navigation = [
  { name: "Spotlight", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Favorites", href: "/favorites" },
];

export default function Navbar() {
  const [selected, setSelected] = useState("Spotlight");

  return (
    <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 flex justify-center">
      <div className="flex justify-center gap-x-6 flex-wrap">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setSelected(item.name)}
            className={`relative block rounded-md border p-3 text-center transition-colors duration-200
              ${
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
