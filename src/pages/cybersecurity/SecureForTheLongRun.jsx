import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";

const blocks = [
  {
    eyebrow: "Monitoring",
    tagline: "Eyes on your system, every day.",
    copy: [
      "The CoStream platform continuously monitors user activity, IT equipment, and data usage across your operation, with intrusion detection watching for anything out of place. Repeated failed logins are detected and blocked automatically, with administrators notified right away.",
      "Behind the platform is a team that tracks CISA alerts, the Known Exploited Vulnerabilities list, and WaterISAC advisories, maintains the threat picture relevant to your specific equipment, and briefs your team on what matters. Staying in the know is our job.",
    ],
  },
  {
    eyebrow: "Remote Access",
    tagline: "Full visibility for your team, managed securely.",
    copy: [
      "CoStream manages your OT VPN administration and secure remote desktop access, so your people connect to the systems they need from wherever they are, every session authenticated, encrypted, and logged.",
      "Remote access is delivered through CoStream's secure infrastructure by design, which means your team gets the convenience of working remotely with an attack surface that stays closed.",
    ],
  },
  {
    eyebrow: "Device Management",
    tagline: "Every device current, patched, and accounted for.",
    copy: [
      "CoStream manages the devices in your operation and keeps them that way: patching and mitigating vulnerabilities on your OT in a risk-informed, prioritized manner as part of the service. Because we know your equipment from onboarding, advisories from CISA and WaterISAC are matched against your documented assets, and you hear from us right away when something affects your system.",
      "Your inventory, configurations, and documentation stay current as your system evolves, maintained as a living record.",
    ],
  },
  {
    eyebrow: "Collaboration",
    tagline: "A partner with a foot in both IT and OT.",
    copy: [
      "CoStream speaks both languages and puts that fluency to work for you, continuously. We coordinate with your operators, IT staff, service providers, and vendors as a standing part of the service, evaluate the cybersecurity of technology you are considering purchasing, and support your compliance and policy work.",
      "Training is part of the relationship too, built around your actual operation and delivered in ways your staff can use, including sessions where your people earn professional credit hours.",
    ],
  },
  {
    eyebrow: "Keeping Pace with the Standard",
    tagline: "Cybersecurity expectations evolve. Your coverage evolves with them.",
    copy: "Cybersecurity standards are living standards, and CoStream keeps pace with them for you. We monitor updates from the EPA and state regulators and keep your configuration, policies, and documentation current, so your utility stays confidently covered today and every time the bar rises.",
  },
];

export default function SecureForTheLongRun() {
  return (
    <>
      <Seo
        title="Secure for the Long Run"
        description="Ongoing Service That Keeps Your System Cybersecure."
      />
      <PageHero
        eyebrow="Cybersecurity"
        headline="Ongoing Service That Keeps Your System Cybersecure"
        intro="Cybersecurity is a practice, and CoStream maintains it for you. Monitoring, remote access, device management, and collaboration continue for the life of the relationship."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
