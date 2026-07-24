import Seo from "../components/blocks/Seo";
import PageHero from "../components/blocks/PageHero";
import InfoBlockList from "../components/blocks/InfoBlockList";
import CardGrid from "../components/blocks/CardGrid";
import CTALink from "../components/blocks/CTALink";
import { IMAGES } from "../content/images";
import styles from "./Home.module.css";

const keyMessagingPoints = [
  {
    heading: "Managed Services",
    body: "Real people, real support. Our personalized hands-on service means we listen to your challenges, develop solutions, implement them, and keep your operations running smoothly. Our culture of engagement is second to none.",
  },
  {
    heading: "Foundational Technology",
    body: "Built to evolve. Our technology platform is evergreen—designed to work with what exists today and adapt to what comes tomorrow. We know that a strong foundation drives continuous improvement and lasting impact for the communities we serve.",
  },
  {
    heading: "Frictionless By Design",
    body: "Our way of working is built on open communication, disciplined processes, and expertise matched to every task. We bring structure and rigor to every implementation and improvement—staying big-picture focused while remaining agile enough to solve problems quickly.",
  },
];

const technologyTiles = [
  {
    title: "SCADA",
    body: "Modern SCADA capability delivered from the cloud, with real-time monitoring, control, and alarming your operators can access anywhere.",
    href: "/technology/scada",
    ctaLabel: "Explore SCADA",
  },
  {
    title: "Beyond SCADA",
    body: "Asset management, compliance reporting, analytics, and operational tools that extend the value of your data well past the control room.",
    href: "/technology/beyond-scada",
    ctaLabel: "Explore Beyond SCADA",
  },
  {
    title: "Ecosystem",
    body: "An open platform that connects with the sensors, hardware, and infrastructure across your operation, ready for whatever you add next.",
    href: "/technology/ecosystem",
    ctaLabel: "Explore Ecosystem",
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Smart, Cybersecure, SCADA Technology built to evolve, driven by service."
      />

      <PageHero
        headline={"Smart, Cybersecure, SCADA Technology\nBuilt to Evolve, Driven by Service"}
        intro="In every challenge, there is an opportunity to make a lasting impact. We believe our technology and service leaves every customer and community better than we found them."
        image={{
          src: IMAGES.home,
          alt: "Aerial view of a water treatment plant",
        }}
      />

      <InfoBlockList items={keyMessagingPoints} />

      <section className={styles.overview}>
        <div className="container">
          <h2 className={styles.overviewHeading}>
            One Platform for Your Entire Operation
          </h2>
          <p className={styles.overviewIntro}>
            CoStream unifies monitoring, control, asset management, and
            reporting in a single cloud platform that connects to the
            equipment and systems you already own.
          </p>
        </div>
        <CardGrid items={technologyTiles} />
      </section>

      <section className={`${styles.overview} ${styles.overviewAlt}`}>
        <div className="container">
          <h2 className={styles.overviewHeading}>
            Cybersecurity Built In, Backed by People Who Know Water
          </h2>
          <p className={styles.overviewIntro}>
            Every CoStream deployment includes cybersecurity as a foundation,
            aligned with the NIST framework and the priorities regulators
            expect water and wastewater utilities to address. Our team helps
            you understand where you stand, strengthen your defenses, and
            maintain compliance as requirements evolve.
          </p>
          <CTALink href="/cybersecurity">Explore Cybersecurity</CTALink>
        </div>
      </section>

      <section className={styles.overview}>
        <div className="container">
          <h2 className={styles.overviewHeading}>Lorem ipsum</h2>
          <p className={styles.overviewIntro}>
            CoStream serves water and wastewater utilities, industrial
            wastewater, waste management operations, and oiil & gas energy
            producers. Wherever critical infrastructure runs, our platform
            and people keep it visible, connected, and protected.
          </p>
          <CTALink href="/industries/municipal-water">
            Explore Industries
          </CTALink>
        </div>
      </section>
    </>
  );
}
