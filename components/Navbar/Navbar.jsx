import { useState } from "react";

const navigation = [
  { name: "Spotlight", href: "#spotlight" },
  { name: "Art pieces", href: "#art-pieces" },
  { name: "Favorites", href: "#favorites" },
];

export default function Navbar() {
  const [selected, setSelected] = useState("Spotlight");

  return (
    <div className="mx-auto max-w-7xl px-6 py-4 md:flex md:items-center md:justify-center lg:px-8">
      <div className="flex justify-center gap-x-6">
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
