import { Heading, Link } from "../components/Elements";

export function Accommodation() {
  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <img src="" />
      <img src={""} />
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
        outside The Bear. Suitable bus times are included on the
        <a href="programme.php">programme</a>. Coach transport will be provided
        on the evening of the data collection day and on Sunday when the bus
        timetable is reduced.
      </p>

      <p>
        Parking at The Bear is not free, but cheap parking is available nearby.
      </p>
    </main>
  );
}
