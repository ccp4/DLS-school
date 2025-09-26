import { materials, ccp4CloudTutorials } from "../code/materials.ts";

export function CourseMaterials() {
  return (
    <main className="m-auto flex max-w-4xl flex-col gap-4 p-4 pb-32 sm:pb-24">
      <h1 className="mb-2 text-2xl font-bold">Course Materials</h1>
      <p>
        Here you will find slides, tutorial links, datasets, and other resources
        for the workshop.
      </p>

      <section className="mt-6">
        <h2 className="mb-2 text-xl font-semibold">CCP4 Cloud Tutorials</h2>
        <ul className="list-disc pl-6">
          {ccp4CloudTutorials.map((item: CCP4CloudTutorial) => (
            <li key={item.link}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 underline"
              >
                {item.title}
              </a>
              {item.description && (
                <span className="ml-2 text-gray-600">– {item.description}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <MaterialsList />
    </main>
  );
}
type Material = {
  id: string | number;
  link: string;
  title: string;
  description?: string;
};

type CCP4CloudTutorial = {
  link: string;
  title: string;
  description?: string;
};

function MaterialsList() {
  if (!materials.length) {
    return (
      <p className="text-gray-500">
        Materials will be added as they become available
      </p>
    );
  }
  return (
    <section className="mt-6">
      <h2 className="mb-2 text-xl font-semibold">
        Lecture and workshop slides
      </h2>
      <ul className="list-disc pl-6">
        {materials.map((item: Material) => (
          <li key={item.id}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline"
            >
              {item.title}
            </a>
            {item.description && (
              <span className="ml-2 text-gray-600">– {item.description}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MaterialsList;
