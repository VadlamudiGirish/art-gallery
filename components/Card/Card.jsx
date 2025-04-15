import Image from "next/image";
import Link from "next/link";

export default function Card({ element, elementName }) {
  return (
    <Link href={`/${elementName}/${element.slug}`} passHref legacyBehavior>
      <a className="group">
        <div className="w-full overflow-hidden rounded-lg">
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
        <h3 className="mt-4 text-lg text-gray-700">{element.name}</h3>
        <p className="mt-1 text-sm font-medium text-gray-900">
          {element.artist}
        </p>
      </a>
    </Link>
  );
}
