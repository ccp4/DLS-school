import { Heading, Link, List } from "../components/Elements";

export function Apply() {
  return (
    <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Heading text="Application process" />
      <p>
        Please click{" "}
        <Link
          href="https://www.diamond.ac.uk/Home/Events/2025/DLS-CCP4.html"
          text="here"
        />{" "}
        to apply online at the Diamond Events page.
      </p>
      <p>
        <b>
          Please note, students must be prepared to submit the e-mail address of
          a supervisor who will write a letter of recommendation to support
          their application.
        </b>
      </p>
    </main>
  );
}
