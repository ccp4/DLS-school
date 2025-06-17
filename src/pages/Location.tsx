import { Heading, Link } from "../components/Elements";

export function Location() {
  return (
    <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-4 bg-white pb-24 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <video
        src={`how-diamond-works.mp4`}
        poster={`https://www.diamond.ac.uk/dam/jcr:cc4ec81e-d480-4821-94c2-a5b982079f94/2024-12-10-Diamond-Aerial-Photo-with-PV.png`}
        autoPlay
        loop
        muted
      ></video>
      <Heading text="Diamond Light Source" />
      <p>
        <Link href="https://www.diamond.ac.uk" text="Diamond Light Source" /> is
        the UK's national synchrotron facility. It is a third generation light
        source providing brilliant beams of light across the spectrum from far
        infrared to hard X-rays, covering a wide variety of synchrotron
        techniques. In the field of{" "}
        <Link href="https://www.diamond.ac.uk/Instruments/Mx.html" text="MX" />,
        Diamond currently provides seven undulator beamlines: three high
        brilliance tunable beamlines, two of which have microfocus capability, a
        fixed wavelength side-station, a nano/microfocus beamline, a dedicated
        long-wavelength native phasing beamline and a versatile <i>in-situ</i>{" "}
        screening and data collection beamline. It also hosts the UK XFEL hub,
        Membrane Protein Laboratory and XChem facility.
      </p>
      <Heading text="Research Complex at Harwell" />
      <p>
        Next to Diamond, the{" "}
        <Link
          href="http://www.rc-harwell.ac.uk/"
          text="Research Complex at Harwell"
        />{" "}
        is a multidisciplinary laboratory providing facilities for research
        teams from UK universities working at the interfaces between traditional
        disciplines. The RCaH is the home of the CCP4 core team, as well as{" "}
        <Link
          href="https://www.rc-harwell.ac.uk/research-groups/protein-production-uk-ppuk"
          text="Protein Production UK"
        />
        , researchers from the{" "}
        <Link
          href="http://www.diamond.ac.uk/Beamlines/Mx/MPL.html"
          text="Membrane Protein Laboratory"
        />
        , and other groups working in MX.
      </p>
      <Heading text="Harwell campus" />
      <p>
        The <Link href="https://www.harwellcampus.com/" text="Harwell Campus" />{" "}
        hosts both Diamond Light Source and the Research Complex at Harwell, as
        well as other facilities at the STFC{" "}
        <Link
          href="https://stfc.ukri.org/about-us/where-we-work/rutherford-appleton-laboratory/"
          text="Rutherford Appleton Laboratory"
        />{" "}
        . It is located in the South Oxfordshire countryside, about 16 miles
        south of Oxford.
      </p>
    </main>
  );
}
