import { ReactNode } from "react";
import { NavLink } from "react-router";

export function Heading({ text }: { text: string }) {
  return <h2 className="mb-1 text-2xl font-bold">{text}</h2>;
}

export function Link({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="text-sky-600 underline hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-100"
    >
      {text}
    </a>
  );
}

export function InternalLink({ to, text }: { to: string; text: string }) {
  return (
    <NavLink
      to={to}
      className="text-sky-600 underline hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-100"
    >
      {text}
    </NavLink>
  );
}

export function List({ children }: { children: ReactNode }) {
  return (
    <ul className="flex list-outside list-disc flex-col gap-2 pl-8">
      {children}
    </ul>
  );
}
