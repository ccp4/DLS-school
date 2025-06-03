import { Heading, Link } from "../components/Elements";

export function Location() {

  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <video
        src={`https://player.vimeo.com/video/666024918?h=8d4faf8cff`}
        poster={`https://www.diamond.ac.uk/dam/jcr:cc4ec81e-d480-4821-94c2-a5b982079f94/2024-12-10-Diamond-Aerial-Photo-with-PV.png`}
        autoPlay
        loop
        muted
      ></video>
      <Heading text="Diamond Light Source" />
      <p>
        <a href="http://www.diamond.ac.uk/">Diamond Light Source</a> is the UK's
      national synchrotron facility. It is a third generation light source
      providing brilliant beams of light across the spectrum from far
      infrared to hard X-rays, covering a wide variety of synchrotron
      techniques. In the field of <a href="https://www.diamond.ac.uk/Instruments/Mx.html">MX</a>,
      Diamond currently provides seven
      undulator beamlines: three high brilliance tunable beamlines, two of which
      have microfocus capability, a fixed wavelength side-station, a nano/microfocus beamline,
      a dedicated long-wavelength native phasing beamline and a versatile <i>in-situ</i>
      screening and data collection beamline. It also hosts the UK XFEL hub, Membrane
      Protein Laboratory and XChem facility.
    </p>
   <Heading text="Research Complex at Harwell" />
    <p>Next to Diamond, the <a href="http://www.rc-harwell.ac.uk/">Research
        Complex at Harwell</a> is a multidisciplinary laboratory providing
      facilities for research teams from UK universities working at the
      interfaces between traditional disciplines. The RCaH is the home of the
      CCP4 core team, as well as <a href="https://www.rc-harwell.ac.uk/research-groups/protein-production-uk-ppuk">Protein
        Production UK</a>, researchers from the <a href="http://www.diamond.ac.uk/Beamlines/Mx/MPL.html">Membrane Protein
        Laboratory</a>, and other groups working in MX.
    </p>
    <Heading text="Harwell campus" />
    <p>The <a href="https://www.harwellcampus.com/">Harwell Campus</a>
      hosts both Diamond Light Source and the Research Complex at Harwell, as
      well as other facilities at the STFC <a href="https://stfc.ukri.org/about-us/where-we-work/rutherford-appleton-laboratory/">
        Rutherford Appleton Laboratory</a>. It is located in the South
      Oxfordshire countryside, about 16 miles south of Oxford.
    </p>

    </main>
  );
}
