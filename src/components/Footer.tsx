import { bbsrc, bca, hampton } from "../code/sponsors";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="my-4 flex flex-col items-center gap-2">
      <p className="text-gray-500">Supported by:</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Logo sponsor={ukri-stfc} />
        <Logo sponsor={diamond} />
        <Logo sponsor={iucr} />
      </div>
    </footer>
  );
}
