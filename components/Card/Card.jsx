import Image from "next/image";

export default function Card({ element, elementName }) {
  return (
    <a
      key={element.id}
      href={`/${elementName}/${element.id}`}
      className="group"
    >
      <Image
        width={780}
        height={439}
        alt={
          "https://unsplash.com/photos/red-and-black-theater-chairs-TFRezw7pQwI"
        }
        src={
          element.poster_path
            ? `https://image.tmdb.org/t/p/w780${element.poster_path}`
            : "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        }
        className="aspect-square w-full rounded-lg object-cover group-hover:opacity-75 sm:aspect-2/3"
      />
      <h3 className="mt-4 text-lg text-gray-700">
        {element.name || element.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-gray-900">
        {new Date(
          element.release_date ? element.release_date : element.first_air_date
        ).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </a>
  );
}
