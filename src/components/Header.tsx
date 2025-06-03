import { ccp4, diamond } from "../code/sponsors";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="flex justify-evenly gap-2">
      <Logo sponsor={ccp4} />
      <Logo sponsor={diamond} />
    </header>
  );
}
