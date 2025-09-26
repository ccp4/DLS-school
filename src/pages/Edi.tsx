import { Heading, InternalLink, List } from "../components/Elements";

export function Edi() {
  return (
    <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-4 bg-white pb-32 text-gray-900 sm:pb-24 dark:bg-gray-900 dark:text-gray-100">
      <Heading text="Statement on equity and inclusion" />
      <p>
        The organisers are committed to making the school productive and
        enjoyable for everyone, regardless of sex, gender identity, sexual
        orientation, disability, age, physical appearance, body size, ethnicity,
        nationality or religion/belief.
      </p>
      <p>
        We will not tolerate harassment of participants, students or tutors, in
        any form.
      </p>
      <p>
        We are committed to achieving a balanced and diverse panel of speakers
        at all our events by inviting speakers of all races, ethnicities,
        genders, ages, abilities, religions, and sexual orientation without
        compromising the quality, and remaining within the topic, of the
        programme. All speakers will have agreed to the Code of Conduct prior to
        agreeing to speak at the event.
      </p>
      <p>
        As part of the registration process, attendees will be required to agree
        to adhere to the CCP4 Code of Conduct (see below).
      </p>
      <Heading text="The CCP4 Code of Conduct" />
      <p>Behave professionally.</p>
      <p>
        Harassment and sexist, racist, or exclusionary comments or jokes are not
        appropriate. Harassment includes sustained disruption of talks or other
        events, inappropriate physical contact, sexual attention or innuendo,
        deliberate intimidation, stalking, and photography or recording of an
        individual without consent. It also includes offensive or belittling
        comments related to sex, gender identity, sexual orientation,
        disability, age, physical appearance, body size, ethnicity, nationality
        or religion/belief.
      </p>
      <p>
        All communication should be appropriate for a professional audience
        including people of many different backgrounds. Sexual language and
        imagery are not appropriate.
      </p>
      <p>Be kind to others. Do not insult or put down other attendees.</p>
      <p>
        Delegates are reminded that the organisers reserve the right to remove
        any person who does not adhere to the code of conduct.
      </p>
      <Heading text="Incident reporting and resolution" />
      <p>
        If you observe someone making you or anyone else feel unsafe or
        unwelcome, please tell them so, and remind them of the Code of Conduct.
        If you are hesitant about addressing the person yourself, report it as
        soon as possible to a member of the Organising Committee. The Committee
        is committed to addressing and resolving the matter to the best of their
        abilities.
      </p>
      <p>
        Please use the <InternalLink to="/contact" text="Contact" /> section
        here, and explain what happened and who was involved so that we can
        investigate.
      </p>
      <p>
        Thank you for your participation in the CCP4 community, and your efforts
        to keep our conference welcoming, respectful, and friendly for all
        participants!
      </p>
      <Heading text="Sanctions" />
      <p>
        When someone is asked to stop any behaviour that makes others
        uncomfortable, they are expected to comply immediately.
      </p>
      <p>
        In response to inappropriate behaviour (e.g. sexual content, rudeness,
        unprofessional) organisers may take any action they deem appropriate,
        including warning the person in question, asking them to leave the
        event, or removing them from a mailing list.
      </p>
      <p>Specific actions may include but are not limited to:</p>
      <List>
        <li>
          asking the person to cease the inappropriate behaviour, and warning
          them that any further reports will result in other sanctions
        </li>
        <li>
          requiring that the person avoid any interaction with, and physical
          proximity to, another person for the remainder of the event
        </li>
        <li>early termination of a talk that violates the policy</li>
        <li>
          not publishing the video or slides of a talk that violates the policy
        </li>
        <li>
          not allowing a speaker who violated the policy to give (further) talks
          at the event
        </li>
        <li>
          immediately ending any event responsibilities or privileges held
        </li>
        <li>
          requiring that the person immediately leave the event and not return
        </li>
        <li>
          blocking the person on social media platforms (for a defined time
          period)
        </li>
        <li>
          banning the person from future events (for a defined time period)
        </li>
        <li>publishing an anonymous account of the harassment</li>
        <li>reporting the incident to the person's employer</li>
      </List>
    </main>
  );
}
