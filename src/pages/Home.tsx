import { InternalLink, List } from "../components/Elements";

export function Home() {
  return (
    <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <h1 className="mb-1 text-center text-3xl font-bold">
          DLS-CCP4 Data Collection and Structure Solution Workshop 2025
        </h1>
        <p className="text-center text-lg">
          Zoom days: 3rd, 10th and 17th November. On site days: 24th - 28th
          November
        </p>
      </div>
      <img
        src={`${import.meta.env.BASE_URL}Diamond_aerial.jpg`}
        alt=""
        className="min-h-40 max-w-full rounded object-cover shadow dark:shadow-lg"
      />
      <p>
        <b>
          We are very pleased to announce the 12th joint Diamond-CCP4 MX
          workshop for graduate students, postdocs and early career scientists.
        </b>
      </p>
      <p>
        All aspects of structure solution will be covered during the workshop,
        from data collection through to phasing, refinement, validation and
        deposition. Please see the preliminary{" "}
        <InternalLink to="programme" text="programme" /> for more details.
      </p>
      <List>
        <li>
          Lectures and tutorials will be delivered by experts in the field,
          sometimes even software authors themselves!
        </li>
        <li>
          One day of data collection time will be provided at Diamond's
          excellent MX beamlines
        </li>
        <li>
          You will be able to work alongside world-leading scientists and
          methods developers on your own projects.
        </li>
      </List>
      <p>
        The workshop will begin with three days of lectures delivered remotely
        by Zoom. Following that, further lectures, tutorials, data collection
        and subsequent analysis will be done in person at Diamond Light Source,
        on the Harwell Oxford campus in Oxfordshire, UK.
      </p>
      <InternalLink to="location" text="More details and directions" />
      <p>
        Spaces are limited. The applicant will have to demonstrate the need for
        this sort of specialist training, and be prepared to submit the e-mail
        address of a supervisor who will write a letter of recommendation in
        support of their application.
      </p>
    </main>
  );
}
