import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";

const blocks = [
  {
    eyebrow: "Cloud-Native",
    tagline: "Born in the cloud, protected by it.",
    copy: [
      "The CoStream application was developed from the start to take full advantage of cloud technologies. Its architecture is browser and app based, which means the most common malware and hacking techniques simply do not apply. There is nothing to install, nothing to patch on a plant computer, and nothing left exposed for an attacker to find.",
      "Cloud-native also means evergreen. Your platform improves continuously, with every user always on the current, most secure version.",
    ],
  },
  {
    eyebrow: "Modern Authentication",
    tagline: "Every login individual, every login verified.",
    copy: [
      "Every CoStream user signs in with individual credentials, protected by multi-factor authentication, single sign-on, and passkeys. Strong password standards are enforced by the platform itself, and because CoStream integrates with the Microsoft environment your team already uses, strong security arrives through one familiar system: same habits, seamless adoption.",
      "The architecture keeps OT and IT credentials separate by design, and access can be revoked centrally the moment a role changes.",
    ],
  },
  {
    eyebrow: "Encrypted Communications",
    tagline: "Protected in transit, on any connection.",
    copy: [
      "All platform communications are encrypted in transit using TLS 1.3, including the MQTT messaging that moves your operational data. Even the way CoStream equipment communicates is designed to be secure.",
      "The system is ISP agnostic, so your sites stay securely connected over whatever Internet service is available to them, from fiber to cellular.",
    ],
  },
  {
    eyebrow: "Centralized Logging",
    tagline: "A complete record, always ready.",
    copy: "Security and access activity across your system is logged automatically and collected centrally, with access restricted to authorized, authenticated users. Your operation always has the clear, protected record it needs to support detection, investigation, and confident answers to auditors and regulators.",
  },
  {
    eyebrow: "Security That Comes Standard",
    tagline: "The technical requirements of today's cybersecurity standards are simply how CoStream works.",
    copy: "Protections that utilities are asked to put in place, from enforced password standards and multi-factor authentication to encryption and centralized logging, are native to the CoStream platform and active from Day 1. Your technology arrives cybersecure, and it stays that way.",
  },
];

export default function SecureByDesign() {
  return (
    <>
      <Seo
        title="Secure by Design"
        description="A Platform That Is Cybersecure by Architecture."
      />
      <PageHero
        eyebrow="Cybersecurity"
        headline="A Platform That Is Cybersecure by Architecture"
        intro="CoStream was built for the cloud from its first line of code, with authentication, encryption, and logging designed in from the start. Security is simply how the system works."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
