import { Heading, Link } from "../components/Elements";

export function Accommodation() {
  return (
    <main className="m-auto flex h-screen max-w-7xl flex-col gap-4 bg-white pb-32 text-gray-900 sm:pb-24 dark:bg-gray-900 dark:text-gray-100">
      <Heading text="Accommodation" />
      <p>
        Rooms for both students and speakers have been arranged at{" "}
        <Link href="http://www.thebearwantage.co.uk/" text="The Bear hotel" />{" "}
        in Wantage.
      </p>

      <p>
        <Link href="https://en.wikipedia.org/wiki/Wantage" text="Wantage" /> is
        a small market town, about 8 miles west of Diamond, which claims to be
        the birthplace of King Alfred. Wantage has a good range of shops, pubs,
        restaurants and a local sports centre, plus regular buses to the Harwell
        Campus, Oxford, Didcot and beyond. The Bear hotel is in the market
        square (town centre) and dates from the 16th century, with many
        traditional features, including oak beams in the bar and restaurant.
        Visitors with some spare time in the town will find that the museum
        immediately behind the hotel offers a good insight into the history of
        the local area.
      </p>
      <Heading text="Transport" />

      <p>
        The Oxford Bus Company{" "}
        <Link href="https://www.oxfordbus.co.uk/services/THTR/X35" text="X35" />{" "}
        route serves the Harwell campus and picks up in Wantage immediately
        outside The Bear. Suitable bus times are included on the{" "}
        <a
          href="programme.php"
          className="text-sky-700 underline dark:text-sky-300"
        >
          programme
        </a>
        . Coach transport will be provided on the evening of the data collection
        day and on Sunday when the bus timetable is reduced.
      </p>

      <p>
        Parking at The Bear is not free, but cheap parking is available nearby.
      </p>

      <table className="rounded dark:bg-gray-900">
        <tbody>
          <tr>
            <td width="70%">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.8951498158285!2d-1.4269390999999936!3d51.588485000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876b15490c245d1%3A0x1b75b1ef4f8c5aa0!2sThe+Bear+Hotel!5e0!3m2!1sen!2sus!4v1441372742261"
                width="800"
                height="600"
                className="rounded"
              ></iframe>
            </td>
            <td align="center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Statue_of_King_Alfred_in_Wantage_Market_Square.jpg"
                alt="King Alfred statue"
                width="404"
                height="607"
                className="rounded border border-gray-300 dark:border-gray-900"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
