export default function ColorPalette({ colors }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Colors:</h3>
      <div className="flex space-x-2">
        {colors.map((color) => {
          return (
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>
    </div>
  );
}
