import Image from "next/image";
import { useRouter } from "next/router";
import ColorPalette from "../ColorPalette/ColorPalette";

export default function DetailPage({ element }) {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <Image
            width={element.dimensions.width}
            height={element.dimensions.height}
            alt="Artwork image"
            src={
              element.imageSource
                ? element.imageSource
                : "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            }
            className="w-full h-auto object-cover group-hover:opacity-75"
          />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-2">{element.name}</h2>
          <p className="text-gray-600 mb-4">{`Artist: ${element.artist}`}</p>
          <p className="text-gray-600 mb-4">{`Year: ${element.year}`}</p>
          <p className="text-gray-600 mb-4">{`Genre: ${element.genre}`}</p>

          <ColorPalette colors={element.colors} />

          <div className="flex space-x-4 mb-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/gallery");
              }}
              className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Back
            </button>
            <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
