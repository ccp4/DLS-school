import { NavLink } from "react-router";

function Link({ to, text }: { to: string; text: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "flex-auto px-4 py-1 text-center" +
        (isActive ? " bg-sky-300" : " bg-gray-200 hover:bg-gray-300")
      }
    >
      {text}
    </NavLink>
  );
}

export function Nav() {
  return (
    <nav className="flex flex-wrap justify-center gap-1">
      <Link to="" text="Home" />
      <Link to="programme" text="Programme" />
      <Link to="people" text="People" />
      <Link to="location" text="Location" />
      <Link to="accommodation" text="Accommodation" />
      <Link to="edi" text="EDI" />
      <Link to="contact" text="Contact" />
      <Link to="apply" text="Apply" />
    </nav>
  );
}
