import { useState } from "react";
import { people } from "../code/people";

export function People() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  let filteredPeople = [];
  for (const person of people) {
    if (
      selectedTags.length === 0 ||
      selectedTags.every((tag) => person.tags?.includes(tag))
    ) {
      filteredPeople.push(person);
    }
  }

  const tagCount: { [tag: string]: number } = {};
  for (const person of filteredPeople) {
    for (const tag of person.tags || []) {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    }
  }

  function handleClick(tag: string) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  return (
    <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-4 bg-white pb-24 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="relative z-50 flex max-w-7xl flex-wrap justify-center gap-2 p-2">
        {Object.keys(tagCount)
          .sort()
          .map((tag) => (
            <button
              key={tag}
              onClick={() => handleClick(tag)}
              className="cursor-pointer"
            >
              <span
                className={`inline-block rounded-l-xl px-3 py-1 ${
                  selectedTags.includes(tag)
                    ? "bg-sky-700 text-white dark:bg-sky-400 dark:text-gray-900"
                    : "bg-sky-200 dark:bg-gray-700 dark:text-gray-100"
                }`}
              >
                {tag}
              </span>
              <span className="inline-block rounded-r-xl bg-gray-200 px-3 py-1 dark:bg-gray-800 dark:text-gray-100">
                {tagCount[tag]}
              </span>
            </button>
          ))}
      </div>
      {selectedTags.length > 0 && (
        <button
          onClick={() => setSelectedTags([])}
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
    </main>
  );
}
