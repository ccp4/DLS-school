import { ukristfc, diamond, iucr } from "../code/sponsors";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full flex-col items-center gap-2 bg-white dark:bg-gray-900">
      <p className="text-gray-500 dark:text-gray-400">Supported by:</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Logo sponsor={ukristfc} />
        <Logo sponsor={diamond} />
        <Logo sponsor={iucr} />
      </div>
    </footer>
  );
}
