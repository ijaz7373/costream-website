import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    eyebrow: "Robust Roles and Permissions",
    tagline: "The Right Control, for the Right Person, at the Right Time.",
    copy: "CoStream's granular roles and permissions engine allows administrators to define precisely what each user can see, do, and control. From read-only observers to full system operators, every role is purposefully configured to match operational responsibilities and organizational policies — ensuring that authority and accountability are always aligned.",
    bullets: [
      "Fully customizable control levels across users, roles, and asset groups",
      "Granular permissions down to individual device commands and functions",
      "Centralized user management with audit-ready access logs",
      "Supports complex organizational hierarchies and multi-site access structures",
    ],
  },
  {
    eyebrow: "Access Anywhere",
    tagline: "Operate Your Infrastructure from Anywhere in the World",
    copy: "CoStream empowers authorized users to take control of their operations — remotely, securely, and confidently. Whether managing a routine process adjustment or responding to an urgent situation, your team can execute control actions from any location through CoStream's secure interface, bringing operational agility to every corner of your organization.",
    bullets: [
      "Secure remote control of equipment and processes from any device",
      "Full control functionality available via web browser and mobile",
      "All control actions logged and time-stamped for accountability",
      "Designed for both routine operations and time-sensitive response scenarios",
    ],
  },
  {
    eyebrow: "Multi-Factor Authentication",
    tagline: "Verified Access for Every Action That Matters",
    copy: "When controlling critical infrastructure, identity matters. CoStream enforces multi-factor authentication to ensure that only verified, authorized personnel can execute control actions. Every login, every command, and every session is protected by an additional layer of security — because in operational technology, trust is everything.",
    bullets: [
      "MFA enforcement for all user accounts and control sessions",
      "Supports authenticator apps",
      "Configurable MFA policies based on user role and action sensitivity",
      "Strengthens access security across all levels of your organization",
    ],
  },
  {
    eyebrow: "Orchestration",
    tagline: "Elevate Beyond Automation. Achieve Orchestration",
    copy: "Automation handles the routine. Orchestration handles the complex. CoStream's Orchestration capability allows you to coordinate multi-step, multi-system workflows that respond intelligently to real-time conditions — executing sequences of actions across your operation with precision and context that elevates your team's effectiveness to an entirely new level. Move from reactive to proactive, from isolated actions to coordinated intelligence.",
    bullets: [
      "Define and execute complex, multi-step operational workflows",
      "Trigger orchestrated actions based on real-time data conditions and events",
      "Coordinate actions across multiple systems, assets, and locations simultaneously",
      "Increases operational consistency, reliability, and team efficiency",
    ],
  },
  {
    eyebrow: "Extend on Premise Control",
    tagline: "Keep What Works. Add What's Possible",
    copy: "Your on-premise control systems are proven and trusted — CoStream extends them. By bridging your existing infrastructure to the cloud, CoStream gives you the flexibility to monitor and control on-premise systems remotely, integrate with cloud-based workflows, and scale your operational capabilities while preserving everything you've already built.",
    bullets: [
      "Seamlessly connects on-premise control systems to CoStream's cloud platform",
      "Enables remote control of on-premise assets through a secure cloud interface",
      "Preserves existing operational logic, configurations, and hardware investments",
      "Unlocks cloud-scale analytics, reporting, and integration capabilities for on-premise systems",
    ],
  },
];

export default function Control() {
  return (
    <>
      <Seo
        title="Control"
        description="CoStream goes beyond visibility—it puts intelligent, secure control of your equipment and processes directly in your hands."
      />
      <PageHero
        eyebrow="SCADA"
        headline="Smarter Control. Safer Operations."
        intro="CoStream goes beyond visibility—it puts intelligent, secure control of your equipment and processes directly in your hands. With customizable permission levels, multi-factor authentication, advanced orchestration, and seamless extension of on-premise control to the cloud, CoStream enables your team to operate confidently and responsibly across every corner of your infrastructure."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
