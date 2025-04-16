import Image from "next/image";
import { useRouter } from "next/router";
import ColorPalette from "../ColorPalette/ColorPalette";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

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
              element.imageSource ||
              "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            }
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-2">{element.name}</h2>
          <p className="text-gray-600 mb-4">{`Artist: ${element.artist}`}</p>
          <p className="text-gray-600 mb-4">{`Year: ${element.year}`}</p>
          <p className="text-gray-600 mb-4">{`Genre: ${element.genre}`}</p>

          <ColorPalette colors={element.colors} />

          <div className="flex gap-4 mb-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/gallery");
              }}
              className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Back
            </button>
            <FavoriteButton artPiece={element} />
          </div>
        </div>
      </div>
    </div>
  );
}
