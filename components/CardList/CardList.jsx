import Card from "../Card/Card";

export default function CardList({ elements, elementName }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 relative">
      {elements.map((element) => (
        <Card element={element} elementName={elementName} />
      ))}
    </div>
  );
}
