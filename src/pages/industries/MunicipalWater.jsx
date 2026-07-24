import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";
import { IMAGES } from "../../content/images";

const blocks = [
  {
    tagline: "Continuous Source and Treatment Monitoring",
    copy: "Track flow, pressure, turbidity, chlorine residual, and tank levels in real time across wells, treatment plants, and distribution points. Operators gain a clear, current picture of system health from any location, supported by automated alerts that surface conditions early enough to act on them.",
  },
  {
    tagline: "Distribution System Awareness",
    copy: "Bring booster stations, storage tanks, and remote sites into one view. Pressure trends and consumption patterns become visible across the network, helping your team maintain steady service and use water resources efficiently.",
  },
  {
    tagline: "Compliance Made Manageable",
    copy: "Generate the records and reports regulators expect, drawn directly from operational data. Sampling results, monitoring logs, and EPA cybersecurity requirements stay organized and accessible, turning compliance into a routine part of operations.",
  },
  {
    tagline: "Asset and Maintenance Tracking",
    copy: "Keep pumps, motors, and treatment equipment running smoothly with scheduled maintenance, complete service histories, and condition data in one place. Planned upkeep extends asset life and keeps your team ahead of the work.",
  },
  {
    tagline: "Managed Service Backing Your Team",
    copy: "CoStream pairs the platform with ongoing managed services, so a small operations team gains the depth of a dedicated support partner. Real people handle the technical heavy lifting, leaving your operators free to run the system.",
  },
];

export default function MunicipalWater() {
  return (
    <>
      <Seo
        title="Municipal Water"
        description="One connected platform that helps you deliver clean water with confidence."
      />
      <PageHero
        eyebrow="Industries"
        headline="Real-Time Visibility and Managed Support for Every Part of Your Water System"
        subhead="One connected platform that helps you deliver clean water with confidence."
        intro="Water operators carry a responsibility that shapes daily life across an entire community. CoStream gives drinking water utilities a single connected platform that brings monitoring, control, maintenance, and compliance together, so your team always knows the state of every asset and can act with confidence. Built on foundational technology and backed by real people who understand utility operations, CoStream helps you deliver safe, reliable water while keeping your operators focused on what matters most."
        image={{ src: IMAGES.municipalWater, alt: "Aerial view of a municipal water tank" }}
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
