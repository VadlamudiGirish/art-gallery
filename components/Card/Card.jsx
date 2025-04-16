import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Card({ element, elementName, isLink = true }) {
  const content = (
    <>
      <div className="w-full overflow-hidden rounded-lg relative">
        <Image
          width={element.dimensions.width}
          height={element.dimensions.height}
          alt="Artwork image"
          src={element.imageSource || "..."}
          className="w-full h-auto object-cover group-hover:opacity-75"
        />
        <div className="absolute top-2 right-2">
          <FavoriteButton artPiece={element} />
        </div>
      </div>
      {isLink ? (
        <>
          <h3 className="mt-4 text-lg text-gray-700">{element.name}</h3>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {element.artist}
          </p>
        </>
      ) : (
        <></>
      )}
    </>
  );

  return isLink ? (
    <Link href={`/${elementName}/${element.slug}`} passHref legacyBehavior>
      <a className="group">{content}</a>
    </Link>
  ) : (
    <div className="group">{content}</div>
  );
}
