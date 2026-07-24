import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    eyebrow: "Real Time Monitoring",
    tagline: "Live Data. Instant Awareness",
    copy: "CoStream continuously collects and displays operational data the moment it's generated. With real-time dashboards and live data feeds, your team always has an accurate, picture of your entire operation — reducing response times and empowering faster, better-informed decisions.",
    bullets: [
      "Live data streaming across all connected assets",
      "Unified dashboards consolidating multiple data sources",
      "Configurable refresh rates to match operational needs",
      "Immediate visibility into system health, performance, and status",
    ],
  },
  {
    eyebrow: "Legacy Technology",
    tagline: "Your Existing Equipment, Supercharged.",
    copy: "CoStream bridges the gap between your proven legacy systems and today's connected world, extracting real-time data from older equipment without expensive overhauls. Extend your prior technology investments while gaining the modern monitoring and analytics capabilities your operations demand.",
    bullets: [
      "Connects to older PLCs, RTUs, SCADA systems, and industrial controllers",
      "Supports a wide range of legacy communication protocols",
      "Maximizes the value and extends the operations life of your existing infrastructure investment",
      "Case Study: Myers Environmental",
    ],
  },
  {
    eyebrow: "IoT Devices",
    tagline: "The Power of the Connected Edge",
    copy: "CoStream natively integrates with a broad ecosystem of IoT sensors and smart devices, pulling data from the field directly into your operational platform. From environmental sensors to smart meters, flow monitors to vibration detectors — CoStream collects, normalizes, and delivers IoT data in real time so your team can act on it immediately.",
    bullets: [
      "Broad compatibility with IoT sensors and edge devices",
      "Real-time incorporation and normalization of IoT data streams",
      "Scalable architecture that grows with your connected device footprint",
      "Seamless integration with industry-standard IoT communication protocols",
    ],
  },
  {
    eyebrow: "Network Devices",
    tagline: "Monitor the Infrastructure That Monitors Everything Else.",
    copy: "Your network is the nervous system of your operation — and CoStream keeps a close eye on it. CoStream monitors the health, performance, and availability of your network devices, ensuring your communication infrastructure remains a source of strength and reliability across your entire operation. Full visibility into your network means your team is always informed, always prepared, and always connected.",
    bullets: [
      "Continuous monitoring of routers, switches, firewalls, and communication hardware",
      "Network health and availability alerts in real time",
      "Proactive identification of connectivity status across all network infrastructure",
      "Full visibility into the infrastructure your other systems depend on",
    ],
    note: "We watch the watchers",
  },
  {
    eyebrow: "Cellular and Satellite",
    tagline: "Stay Connected, No Matter How Remote",
    copy: "CoStream supports cellular and satellite communication links, ensuring your most remote assets — pipelines, wellheads, substations, field sensors — stay connected and monitored regardless of location. Wherever your operations reach, CoStream reaches further.",
    bullets: [
      "Support for cellular (4G/5G) and satellite connectivity",
      "Reliable monitoring of assets in remote, off-grid, or bandwidth-constrained environments",
      "Automatic failover and connection management for mission-critical links",
      "Consistent data delivery regardless of geographic or physical barriers",
    ],
  },
  {
    eyebrow: "Cloud to Cloud Integration",
    tagline: "Connect Your Cloud Ecosystem",
    copy: "CoStream seamlessly integrates with third-party cloud platforms, enterprise applications, and data services, enabling bi-directional data exchange across your entire technology ecosystem. Break down data barriers and unlock the full value of every system you already own.",
    bullets: [
      "Pre-built and configurable integrations with leading cloud platforms and services",
      "Bi-directional data synchronization across systems",
      "Supports REST APIs, webhooks, and cloud-native integration patterns",
      "Consolidates operational, business, and analytics data into a unified view",
    ],
  },
  {
    eyebrow: "Store and Forward",
    tagline: "Complete Data Continuity, Always",
    copy: "CoStream's Store and Forward capability ensures that data captured during communication interruptions is preserved and protected. When connectivity is restored, data is automatically transmitted and reconciled — giving you a complete, uninterrupted operational record and the confidence that every data point is accounted for.",
    bullets: [
      "Local data logging during connectivity interruptions",
      "Automatic data synchronization when connection is restored",
      "Ensures data integrity and operational continuity in all environments",
    ],
  },
  {
    eyebrow: "Access Anywhere",
    tagline: "Your Operations, In Your Pocket",
    copy: "CoStream puts your monitoring capabilities wherever you are. Whether you're in the control room, working from a remote location, or standing in the field, you have full access to your real-time operational data through a secure, browser-based interface or mobile application. Stay informed and in touch with your operation — from any device, at any time",
    bullets: [
      "Secure web and mobile access from any internet-connected device",
      "Consistent, full-featured experience across desktop and mobile",
      "Role-based access ensuring the right people see the right data",
      "Streamlined access for authorized users across all platforms",
    ],
  },
];

export default function Monitoring() {
  return (
    <>
      <Seo
        title="Monitoring"
        description="CoStream connects to any device, system, and data source across your operation — delivering a live, unified view of what's happening right now."
      />
      <PageHero
        eyebrow="SCADA"
        headline="See Everything. Stay Ahead."
        intro="CoStream connects to any device, system, and data source across your operation — delivering a live, unified view of what's happening right now. With support for legacy hardware, modern IoT devices, cellular and satellite networks, and cloud-to-cloud integrations, CoStream ensures every asset stays visible, every signal gets read, and every team has the data they need to make confident decisions."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
