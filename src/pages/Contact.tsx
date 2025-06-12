import { Heading, Link } from "../components/Elements";
import { people } from "../code/people";

export function Contact() {
  return (
    <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Heading text="Contact us" />
      <p className="max-w-4xl">
        Feel free to contact any or all of the organisers should you have any
        queries related to the school, including registration, programme, or
        accommodation.
      </p>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {people
          .filter((p) => p.tags?.includes("Organiser"))
          .map((person) => {
            return (
              <div
                key={person.name}
                className="flex flex-col items-center rounded dark:bg-gray-900"
              >
                <img
                  src={`${import.meta.env.BASE_URL}people/${person.photo}`}
                  className="mb-1 h-50 w-50 rounded-full object-cover"
                />
                <p>{person.name}</p>
                <Link href={`mailto:${person.email}`} text={person.email!} />
              </div>
            );
          })}
      </div>
    </main>
  );
}
