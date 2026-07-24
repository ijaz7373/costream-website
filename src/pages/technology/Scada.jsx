import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import CardGrid from "../../components/blocks/CardGrid";
import { IMAGES } from "../../content/images";

const tiles = [
  {
    title: "Monitoring",
    body: "See real-time conditions across every site, sensor, and asset from a single operational view.",
    href: "/technology/scada/monitoring",
  },
  {
    title: "Control",
    body: "Operate pumps, valves, and equipment remotely with the same confidence as standing in front of the panel.",
    href: "/technology/scada/control",
  },
  {
    title: "Alerts & Notifications",
    body: "Get the right information to the right person the moment conditions change, by text, email, or call.",
    href: "/technology/scada/alerts-notifications",
  },
  {
    title: "Visualizations",
    body: "Understand your operation at a glance with live dashboards, site maps, and process displays built around how your team works.",
    href: "/technology/scada/visualizations",
  },
  {
    title: "Event Tracking",
    body: "Capture a complete, time-stamped record of every alarm, action, and operational event across your system.",
    href: "/technology/scada/event-tracking",
  },
  {
    title: "Trends & Analysis",
    body: "Turn historical data into insight with trend charts that reveal patterns, predict issues, and support better decisions.",
    href: "/technology/scada/trends-analytics",
  },
  {
    title: "Reporting",
    body: "Generate the operational and compliance reports your team and regulators need, automatically and on schedule.",
    href: "/technology/scada/reporting",
  },
];

export default function Scada() {
  return (
    <>
      <Seo
        title="SCADA"
        description="Real-time visibility, remote control, and the alerts, trends, and reports that turn operational data into confident decisions."
      />
      <PageHero
        headline="Monitor, Control, and Understand Every Point in Your Operation"
        subhead="Real-time visibility, remote control, and the alerts, trends, and reports that turn operational data into confident decisions."
        intro="CoStream delivers complete SCADA capability through a secure, cloud-based platform. Operators monitor live conditions across every site, control equipment remotely, and stay ahead of issues with intelligent alerts and notifications. Rich visualizations, event tracking, and trend analysis turn raw data into operational insight, while built-in reporting keeps your team and your regulators informed. Explore each capability below."
        image={{ src: IMAGES.scada, alt: "Metal pipes and valves in an industrial facility" }}
      />
      <div style={{ paddingBlock: "var(--space-8)" }}>
        <CardGrid items={tiles} />
      </div>
    </>
  );
}
