import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";
import { IMAGES } from "../../content/images";

const blocks = [
  {
    tagline: "Chemical Injection Monitoring",
    copy: "Track injection rates and tank levels with precision across distributed sites. Accurate consumption data reduces chemical waste and keeps treatment programs on target, all visible from a single platform.",
  },
  {
    tagline: "Distributed Wellsite Visibility",
    copy: "Bring remote wellsites and production assets into one view. Operators gain continuous awareness of equipment status across the fleet, so issues surface early and crews are dispatched where they are needed most.",
  },
  {
    tagline: "Equipment Uptime and Alerts",
    copy: "Monitor pump controllers and production equipment in real time, with automated alerts that flag developing conditions. Continuous visibility supports dependable uptime and keeps high-value assets productive.",
  },
  {
    tagline: "Consumption Tracking and Reporting",
    copy: "Capture usage data automatically and produce customized reports for customers and chemical suppliers. Clear, timely reporting keeps every stakeholder informed and strengthens service relationships.",
  },
  {
    tagline: "Scale Without Added Overhead",
    copy: "Grow from a proof of concept to a large fleet on the same platform, without building proprietary software or expanding field staff. CoStream's managed services handle the technical foundation as you scale.",
  },
];

export default function OilGasEnergy() {
  return (
    <>
      <Seo
        title="Oil & Gas, Energy"
        description="One platform that gives distributed operations unified visibility and control."
      />
      <PageHero
        eyebrow="Industries"
        headline="Real-Time Data from Every Wellsite, Asset, and Facility in Your Fleet"
        subhead="One platform that gives distributed operations unified visibility and control."
        intro="Oil, gas, and energy operations stretch across remote sites and high-value equipment, where uptime and precise monitoring drive results. CoStream gives operators and service companies a single connected platform that delivers real-time data from chemical injection systems, pump controllers, and production equipment across every site. Built to scale from one location to hundreds without adding field personnel, CoStream helps you reduce waste, minimize downtime, and keep customers and partners fully informed."
        image={{ src: IMAGES.oilGasEnergy, alt: "Oil rig platform" }}
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
