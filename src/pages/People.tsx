import { useState } from "react";
import { people } from "../code/people";

export function People() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    [],
  );

  let filteredPeople = [];
  for (const person of people) {
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => person.tags?.includes(tag));
    const matchesAvailability =
      selectedAvailability.length === 0 ||
      selectedAvailability.every((d) => person.availability?.includes(d));
    if (matchesTags && matchesAvailability) {
      filteredPeople.push(person);
    }
  }

  const tagCount: { [tag: string]: number } = {};
  const availabilityCount: { [date: string]: number } = {};
  for (const person of filteredPeople) {
    for (const tag of person.tags || []) {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    }
    for (const d of person.availability || []) {
      availabilityCount[d] = (availabilityCount[d] || 0) + 1;
    }
  }

  function handleTagClick(tag: string) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  function handleAvailabilityClick(date: string) {
    if (selectedAvailability.includes(date)) {
      setSelectedAvailability(selectedAvailability.filter((d) => d !== date));
    } else {
      setSelectedAvailability([...selectedAvailability, date]);
    }
  }

  return (
    <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-4 bg-white pb-40 text-gray-900 sm:pb-32 dark:bg-gray-900 dark:text-gray-100">
      <div className="relative z-50 flex max-w-7xl flex-wrap justify-center gap-2 p-2">
        {/* Availability filters (placed at top) */}
        {Object.keys(availabilityCount)
          .sort()
          .map((date) => (
            <button
              key={date}
              onClick={() => handleAvailabilityClick(date)}
              className="cursor-pointer"
            >
              <span
                className={`inline-block rounded-l-xl px-3 py-1 ${
                  selectedAvailability.includes(date)
                    ? "bg-rose-700 text-white dark:bg-rose-400 dark:text-gray-900"
                    : "bg-rose-200 dark:bg-gray-700 dark:text-gray-100"
                }`}
              >
                {date}
              </span>
              <span className="inline-block rounded-r-xl bg-gray-200 px-3 py-1 dark:bg-gray-800 dark:text-gray-100">
                {availabilityCount[date]}
              </span>
            </button>
          ))}
      </div>

      {(selectedTags.length > 0 || selectedAvailability.length > 0) && (
        <button
          onClick={() => {
            setSelectedTags([]);
            setSelectedAvailability([]);
          }}
          className="flex cursor-pointer items-center gap-1 rounded-xl bg-gray-100 px-3 py-1 dark:bg-gray-700 dark:text-gray-100"
        >
          <span>Clear Selection</span>
          <span className="material-symbols-outlined">close</span>
        </button>
      )}

      <div className="flex flex-wrap justify-center gap-4 p-2">
        {filteredPeople.map((person) => {
          return (
            <a
              key={person.name}
              href={person.homepage}
              className="group relative flex flex-col items-center"
            >
              <div
                className="mb-1 h-36 w-36 rounded-full border border-white bg-cover bg-center dark:border-gray-900"
                style={{
                  backgroundImage: `url(${import.meta.env.BASE_URL}people/${person.photo || "default.png"})`,
                }}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <p>{person.name}</p>
              <div className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 flex -translate-x-1/2 flex-wrap justify-start opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                {/* Availability badges appear above tags */}
                {(Array.isArray(person.availability)
                  ? person.availability
                  : person.availability
                    ? [person.availability]
                    : []
                )
                  .filter(Boolean)
                  .map((d) => (
                    <span
                      key={d}
                      className="mr-2 mb-1 inline-block rounded bg-rose-200 px-2 py-1 text-left text-xs whitespace-nowrap text-rose-700 dark:bg-gray-700 dark:text-rose-200"
                    >
                      {d}
                    </span>
                  ))}

                {person.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="mr-2 mb-1 inline-block rounded bg-sky-200 px-2 py-1 text-left text-xs whitespace-nowrap text-sky-700 dark:bg-gray-700 dark:text-sky-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          );
        })}
      </div>

      {/* Tags filters moved to a fixed right-side vertical bar */}
      <div className="fixed top-1/2 right-6 z-50 hidden w-64 -translate-y-1/2 flex-col gap-2 lg:flex">
        <div className="flex flex-col rounded-lg bg-white/90 px-2 py-3 shadow-md backdrop-blur-sm dark:bg-gray-800/90">
          <div className="mb-2 px-2 text-sm font-medium text-gray-700 dark:text-gray-200"></div>
          <div className="flex max-h-[60vh] flex-col gap-2 overflow-auto px-1">
            {Object.keys(tagCount)
              .sort()
              .map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="flex items-center justify-between rounded-lg px-2 py-1 hover:bg-sky-100 dark:hover:bg-gray-700"
                >
                  <span
                    className={`inline-block rounded-l-xl px-2 py-0.5 text-left text-sm ${
                      selectedTags.includes(tag)
                        ? "bg-sky-700 text-white dark:bg-sky-400 dark:text-gray-900"
                        : "bg-transparent text-sky-700 dark:text-sky-200"
                    }`}
                  >
                    {tag}
                  </span>
                  <span className="inline-block rounded-r-xl bg-gray-200 px-2 py-0.5 text-sm dark:bg-gray-800 dark:text-gray-100">
                    {tagCount[tag]}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
