import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";
import { IMAGES } from "../../content/images";

const blocks = [
  {
    tagline: "Collection System and Lift Station Monitoring",
    copy: "Watch wet well levels, pump runtimes, and flow across every lift station from a single dashboard. Early visibility into rising levels and pump performance helps your team keep collection systems flowing and respond well ahead of overflow conditions.",
  },
  {
    tagline: "Treatment Process Visibility",
    copy: "Monitor dissolved oxygen, blower performance, clarifier operation, and biological process indicators in real time. Operators can fine-tune treatment with current data and maintain stable, efficient performance through changing conditions.",
  },
  {
    tagline: "Effluent and Permit Compliance",
    copy: "Capture discharge monitoring data automatically and produce the documentation your permits require. Trend analysis and clean reporting make it straightforward to demonstrate compliance and stay ahead of reporting deadlines.",
  },
  {
    tagline: "Equipment Reliability",
    copy: "Track the health of pumps, blowers, and treatment equipment with maintenance scheduling and full-service histories. Planned maintenance keeps critical assets dependable and reduces the surprises that pull crews away from core work.",
  },
  {
    tagline: "A Partner in Day-to-Day Operations",
    copy: "CoStream's managed services give your operators expert backing for configuration, monitoring, and cybersecurity. The result is a frictionless experience that lets your team concentrate on running a clean, complaint-specific operation.",
  },
];

export default function MunicipalWastewater() {
  return (
    <>
      <Seo
        title="Municipal Wastewater"
        description="One connected platform that helps you protect public health and local waterways."
      />
      <PageHero
        eyebrow="Industries"
        headline="End-to-End Visibility from Collection Through Treatment and Discharge"
        subhead="One connected platform that helps you protect public health and local waterways."
        intro="Wastewater operations run around the clock, and the stakes for the environment and public health are high. CoStream connects your lift stations, treatment processes, and discharge monitoring into one platform that keeps your team informed and in control. With real-time data, proactive maintenance, and managed support built in, CoStream helps you meet permit requirements consistently while keeping operations smooth and your community protected."
        image={{ src: IMAGES.municipalWastewater, alt: "Aerial view of a wastewater treatment plant" }}
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
