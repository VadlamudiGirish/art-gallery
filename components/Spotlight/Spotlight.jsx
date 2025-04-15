import Card from "../Card/Card";

export default function Spotlight({ element }) {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-6 py-10">
      <div className="max-w-sm w-full">
        <Card element={element} elementName={"gallery"} />
      </div>
    </div>
  );
}
