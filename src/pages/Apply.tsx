import { Heading, Link, List } from "../components/Elements";

export function Apply() {
  return (
    <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Heading text="Application process" />
      <p>
        Please click{" "}
        <Link
          href="https://www.diamond.ac.uk/Home/Events/2025/Diamond-CCP4-Data-Collection-and-Structure-Solution-Workshop-2025.html"
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
      <p>
        <b>
          Participants are responsible for making their own travel arrangements
          and ensuring that they are able to attend the Diamond-CCP4 Data
          Collection and Structure Solution Workshop 2025. It is recommended
          that you check any visa requirements with your local embassy or
          consulate for visa entry to the UK. Participants should inform
          themselves of the entry requirements (i.e. visa requirements) of the
          event location and complete the necessary formalities in good time
          before the event begins. Neither Diamond nor STFC will be liable if a
          visa application is denied, a visa is received too late to attend, or
          if a delegate is not able to travel to the Diamond-CCP4 Data
          Collection and Structure Solution Workshop 2025.
        </b>
      </p>
    </main>
  );
}
