import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "Asset-Attached Photo Capture",
    copy: "Photograph equipment conditions, installations, or field observations directly from the field and attach images to the relevant asset or work order in real time, with instant, organized attachment to the right record.",
  },
  {
    tagline: "Visual Work Documentation",
    copy: "Build a before-and-after visual record of completed work that validates your processes and gives every stakeholder clear, documented evidence of quality outcomes.",
  },
  {
    tagline: "Camera Integration",
    copy: "Connect live and recorded video feeds from site cameras directly into the CoStream environment, providing full situational awareness within a single, unified platform.",
  },
  {
    tagline: "Searchable Visual History",
    copy: "Pull up every photo or video tied to a specific asset or event in seconds. Critical context is always one click away, accessible even years after it was captured.",
  },
  {
    tagline: "Streamlined Field Reporting",
    copy: "Simplify field reporting by letting images do the talking. Field teams capture, tag, and upload directly from the app, turning visual documentation into a natural part of every workflow.",
  },
];

export default function PhotoVideoIntegration() {
  return (
    <>
      <Seo
        title="Photo and Video Integration"
        description="Integrated photo and video capture that puts visual context exactly where your team needs it most."
      />
      <PageHero
        eyebrow="Beyond SCADA"
        headline="See What's Happening"
        subhead="Integrated photo and video capture that puts visual context exactly where your team needs it most."
        intro="Visual documentation adds powerful context to your operations. CoStream Photo and Video Integration connects images and video directly to your assets, work orders, and maintenance records, giving your team the evidence and clarity to make confident decisions, faster."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
