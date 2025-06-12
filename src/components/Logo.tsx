import { Sponsor } from "../code/sponsors";

export function Logo({ sponsor }: { sponsor: Sponsor }) {
  return (
    <a href={sponsor.url}>
      <img
        src={`${import.meta.env.BASE_URL}logos/${sponsor.logo}`}
        alt={sponsor.name}
        className="h-15 dark:shadow dark:drop-shadow-[0_0_10px_white]"
      />
    </a>
  );
}
