import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import BulletList from "../../../components/blocks/BulletList";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const topBullets = [
  "Automatic capture of all system and asset events in real time",
  "Searchable event log with powerful filtering by asset, type, time, user, and status",
  "Visual event timeline for intuitive review of operational sequences",
  "Event correlation to connect related occurrences across assets and systems",
  "Integration with alerts, notifications, and maintenance workflows",
  "Exportable event records for reporting, compliance, and analysis",
];

const blocks = [
  {
    eyebrow: "Audit Path",
    tagline: "A Complete Record of Every Action. Every Time",
    copy: [
      "In regulated and critical operational environments, accountability isn't optional. CoStream maintains a comprehensive, tamper-evident audit path that records every user action, system event, configuration change, and control command, automatically, continuously, and without exception.",
      "When questions arise, whether from an internal review, a regulatory inquiry, or an operational debrief, CoStream's audit path delivers the complete, verifiable record your team needs.",
    ],
    bullets: [
      "Automatic logging of all user actions, control commands, and system events",
      "Time-stamped, user-attributed records for every interaction",
      "Tamper-evident audit trail that maintains the integrity of the record",
      "Searchable and filterable audit history for fast, focused review",
      "Supports regulatory compliance and internal accountability requirements",
      "Exportable audit records in formats suitable for reporting and submission",
    ],
  },
  {
    eyebrow: "Track Everything",
    tagline: "Nothing Happens in Your Operation Without a Record",
    copy: [
      "CoStream is built on the principle that operational visibility requires completeness. Partial records create partial understanding. CoStream tracks every data point, every event, every alert, every action, and every system response — across every connected asset, continuously and automatically.",
      "When your team needs to understand what happened, when, and why, the answer is always in CoStream — not scattered across disconnected logs, not dependent on someone's memory, and not lost to a gap in the record.",
    ],
    bullets: [
      "Comprehensive tracking across assets, systems, users, events, and data points",
      "Continuous, automatic record-keeping with no manual logging required",
      "Unified operational history across all connected devices and systems",
      "Long-term data retention supporting trend analysis and compliance requirements",
      "Cross-system event correlation for complete situational understanding",
      "Accessible, searchable, and exportable records across all tracked dimensions",
    ],
  },
  {
    eyebrow: "Pattern Recognition",
    comingSoon: true,
    tagline: "From Seeing What Happened to Knowing What's Coming",
    copy: [
      "The next evolution in operational intelligence is already in development at CoStream. Pattern Recognition will apply advanced analytical capabilities to your operational history — surfacing recurring behaviors, emerging trends, and early indicators of conditions that deserve attention, before they become events that require a response.",
      "Where today's monitoring tells you what is happening, Pattern Recognition will tell you what is likely to happen next — giving your team the opportunity to act on insight rather than react to outcomes.",
    ],
    bullets: [
      "Automated identification of recurring patterns across asset and system data",
      "Early warning indicators based on behavioral trends rather than threshold breaches",
      "Anomaly detection that learns from your operation's unique baseline",
      "Pattern visualization that makes complex analytical findings immediately understandable",
      "Integration with alerts and notifications to surface pattern-based insights proactively",
      "Continuously improving as your operational data grows",
    ],
    note: "Pattern Recognition is currently in development. Contact us to learn more about our product roadmap.",
  },
];

export default function EventTracking() {
  return (
    <>
      <Seo
        title="Event Tracking"
        description="Every Event. Documented. Searchable. Understood."
      />
      <PageHero
        eyebrow="SCADA"
        headline="Every Event. Documented. Searchable. Understood"
        intro={[
          "Operations are defined by events — equipment state changes, process transitions, alarm acknowledgments, operator actions, and system responses. CoStream captures and visualizes every event as it occurs, creating a continuous, searchable record of your operational history that makes it possible to understand not just what is happening now, but exactly what happened and when.",
          "Event Tracking turns the stream of operational activity into a structured, navigable record that supports everything from daily shift handoffs to long-term performance analysis.",
        ]}
      />
      <div className="container" style={{ paddingTop: "var(--space-6)" }}>
        <BulletList items={topBullets} />
      </div>
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
