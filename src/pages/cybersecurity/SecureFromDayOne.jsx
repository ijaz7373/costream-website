import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";

const blocks = [
  {
    eyebrow: "Asset Management",
    tagline: "Every asset inventoried, documented, backed up, and secured.",
    copy: [
      "CoStream builds your complete asset inventory during implementation, covering your OT and IT network assets, including third-party and legacy equipment. Configurations, software and firmware versions, and network topology are documented as a living record, so your team always knows exactly what is on the network.",
      "Default manufacturer and vendor passwords are changed before anything goes into service, and managed backups are established, stored separately from source systems, and tested, giving your operation a known, safe state to return to from the very beginning.",
    ],
  },
  {
    eyebrow: "Network Segmentation",
    tagline: "Your OT environment, deliberately structured and protected.",
    copy: [
      "CoStream deployments organize your network into subnets and VLANs that keep operational technology properly separated from IT systems and shielded from the public Internet. Connections into the OT environment pass through monitored, logged intermediaries and are allowed only when explicitly authorized.",
      "Your team gets safe, full remote visibility while the attack surface stays closed.",
    ],
  },
  {
    eyebrow: "Cybersecurity Assessment",
    tagline: "A clear picture of where your system stands against the standard regulators expect.",
    copy: "Every CoStream deployment includes a cybersecurity assessment of your operational technology, measured against the EPA's cybersecurity checklist for drinking water and wastewater systems and the CISA performance goals behind it. The assessment covers your assets, access and credentials, remote access, documentation, training, and incident readiness, and produces a practical roadmap for full coverage.",
  },
  {
    eyebrow: "Resiliency Planning",
    tagline: "Prepared, practiced, and ready to recover.",
    copy: [
      "CoStream works with your team during deployment to put resiliency in place: a written incident response plan built around the scenarios that matter to your operation, clear reporting procedures, and tested recovery paths back to a known, safe state.",
      "Your utility comes online with its response readiness already established, supported by experts who know your system and stand beside you when it counts.",
    ],
  },
  {
    eyebrow: "Better on Day One",
    tagline: "Implemented in the time others spend planning.",
    copy: "CoStream addresses the OT-related areas of today's cybersecurity standards from Day 1, delivered as part of deployment rather than as a separate project. Your system arrives inventoried, segmented, assessed, and resilient, with a team that knows it completely.",
  },
];

export default function SecureFromDayOne() {
  return (
    <>
      <Seo
        title="Secure from Day One"
        description="A Deployment That Builds Security Into Your Operation."
      />
      <PageHero
        eyebrow="Cybersecurity"
        headline="A Deployment That Builds Security Into Your Operation"
        intro="Coming onto the CoStream platform makes you more cybersecure. Asset management, network segmentation, assessment, and resiliency planning are built into how we stand up every system."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
