import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";
import CardGrid from "../../components/blocks/CardGrid";
import { IMAGES } from "../../content/images";

const introBlock = [
  {
    tagline: "Holistic by Design",
    copy: [
      "CoStream designed cybersecurity into every aspect of its solution from the start. The platform is cloud-native and secure by architecture. Deployment builds security into your operation as your system comes online. Ongoing service keeps every protection current for the life of the relationship.",
      "The ecosystem integrates with your existing infrastructure and strengthens your security posture at every layer, so your team enjoys the full power of the Internet and cloud, remote access included, with complete confidence.",
    ],
  },
];

const readyBlock = [
  {
    tagline: "CoStream covers the full scope of what regulators now expect.",
    copy: "CoStream's platform, people, and ongoing service combine to address every area of the EPA's cybersecurity checklist for drinking water and wastewater systems, the standard built on the same CISA performance goals that guide every critical infrastructure sector. As states move to adopt it, CoStream clients are already there, free to focus on producing and distributing safe water while cybersecurity stays covered.",
  },
];

const ways = [
  {
    title: "Secure by Design",
    body: "The CoStream platform was built cloud-native from day one, with modern authentication, encrypted communications, and centralized logging woven into its architecture. Security is simply how the system works.",
    href: "/cybersecurity/secure-by-design",
    ctaLabel: "Explore the Technology",
  },
  {
    title: "Secure from Day One",
    body: "Getting on the platform makes you more cybersecure. Every deployment includes asset management, network segmentation, a cybersecurity assessment, and resiliency planning as part of how we stand up your system.",
    href: "/cybersecurity/secure-from-day-one",
    ctaLabel: "See What Deployment Includes",
  },
  {
    title: "Secure for the Long Run",
    body: "Cybersecurity is a practice, and our service keeps it current. We monitor your system, manage remote access and devices, track advisories against your specific equipment, and collaborate with your IT, OT, and service partners for the life of the relationship.",
    href: "/cybersecurity/secure-for-the-long-run",
    ctaLabel: "Discover Ongoing Support",
  },
];

export default function Cybersecurity() {
  return (
    <>
      <Seo
        title="Cybersecurity"
        description="The CoStream platform, deployment process, and ongoing service work as one, giving your system all the benefits of the cloud with protections other approaches simply cannot provide."
      />
      <PageHero
        headline="Built Into Every Layer of Your Operation"
        subhead="The CoStream platform, deployment process, and ongoing service work as one, giving your system all the benefits of the cloud with protections other approaches simply cannot provide."
        image={{ src: IMAGES.cybersecurity, alt: "Server racks in a secure data center" }}
      />
      <FeatureBlockList blocks={introBlock} />
      <div style={{ paddingBlock: "var(--space-7)" }}>
        <CardGrid
          heading="Three Ways We Keep You Cybersecure"
          intro="A more secure platform. A deployment that gets you secure. A service that keeps you that way."
          items={ways}
        />
      </div>
      <FeatureBlockList blocks={readyBlock} />
    </>
  );
}
