import { useHeaderStore } from "../../store/headerStore";

export default function Header() {
  const pageName = useHeaderStore((state) => state.pageName);

  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight">
          {pageName}
        </h2>
      </div>
    </div>
  );
}
