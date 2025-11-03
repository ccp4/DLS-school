import { ukristfc, diamond, iucr, dectris } from "../code/sponsors";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full flex-col items-center gap-2 bg-white p-2 dark:bg-gray-900">
      <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
        Supported by:
      </p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <Logo sponsor={ukristfc} />
        <Logo sponsor={iucr} />
        <Logo sponsor={dectris} />
      </div>
    </footer>
  );
}
