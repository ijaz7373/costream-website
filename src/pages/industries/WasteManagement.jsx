import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";
import { IMAGES } from "../../content/images";

const blocks = [
  {
    tagline: "Environmental Monitoring",
    copy: "Track landfill gas, leachate levels, groundwater conditions, and air quality continuously. Real-time data and automated alerts help your team maintain environmental controls and document conditions for regulators with confidence.",
  },
  {
    tagline: "Facility and Equipment Oversight",
    copy: "Monitor pumps, blowers, compactors, and processing systems across sites from one view. Performance data and maintenance scheduling keep critical equipment running and help your team plan upkeep around operations.",
  },
  {
    tagline: "Multi-Site Coordination",
    copy: "Bring landfills, transfer stations, and processing facilities into a single platform. Distributed operations gain shared visibility, so managers can compare site performance and direct resources where they deliver the most value.",
  },
  {
    tagline: "Compliance and Reporting",
    copy: "Capture the operational and environmental data your permits require and generate clean reports directly from the platform. Organized records make regulatory reporting a routine, predictable task.",
  },
  {
    tagline: "Managed Service That Scales With You",
    copy: "As your operation grows from one site to many, CoStream's managed services grow alongside it. Real support handles the technical complexity, keeping your platform reliable and your teams focused on the work.",
  },
];

export default function WasteManagement() {
  return (
    <>
      <Seo
        title="Waste Management"
        description="One platform that helps you run smarter, compliant operations across every site."
      />
      <PageHero
        eyebrow="Industries"
        headline="Connected Monitoring for Landfills, Transfer Stations, and Processing Facilities"
        subhead="One platform that helps you run smarter, compliant operations across every site."
        intro="Waste management operations span distributed sites, complex equipment, and rigorous environmental requirements. CoStream brings these moving parts into one connected platform, giving operators real-time visibility into facility systems, environmental conditions, and equipment performance. Backed by managed services and built to grow with your operation, CoStream helps you run efficient, compliant facilities while keeping your teams coordinated across every location."
        image={{ src: IMAGES.wasteManagement, alt: "Aerial view of a landfill site" }}
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
