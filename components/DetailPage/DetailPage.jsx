import Image from "next/image";
import { useRouter } from "next/router";
import ColorPalette from "../ColorPalette/ColorPalette";
import Card from "../Card/Card";

export default function DetailPage({ element }) {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        aria-label="Back to gallery"
        id="back-to-gallery"
        onClick={(e) => {
          e.preventDefault();
          router.push("/gallery");
        }}
        className="mb-6 cursor-pointer hover:text-indigo-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <Card element={element} elementName="artwork" isLink={false} />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-2">{element.name}</h2>
          <p className="text-gray-600 mb-4">{`Artist: ${element.artist}`}</p>
          <p className="text-gray-600 mb-4">{`Year: ${element.year}`}</p>
          <p className="text-gray-600 mb-4">{`Genre: ${element.genre}`}</p>

          <ColorPalette colors={element.colors} />
        </div>
      </div>
    </div>
  );
}
