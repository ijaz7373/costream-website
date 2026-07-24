import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import InfoBlockList from "../../components/blocks/InfoBlockList";
import CardGrid from "../../components/blocks/CardGrid";
import { IMAGES } from "../../content/images";

const threePartCopy = [
  {
    heading: "One Platform. Every Workflow.",
    body: "Beyond SCADA capabilities are fully integrated with your CoStream environment. Data flows between maintenance records, asset history, tasks, files, photos, and your operational data, naturally and without manual effort.",
  },
  {
    heading: "Built to Evolve with You.",
    body: "Your operations change. Your technology should too. CoStream's evergreen platform adapts as your needs grow, so you are always equipped with the right tools for what comes next.",
  },
  {
    heading: "Designed for the Way You Work.",
    body: "Whether your team is in the field, at a desk, or responding to an incident, CoStream's Beyond SCADA tools are built for real operational environments: intuitive, fast, and reliable.",
  },
];

const tiles = [
  {
    title: "Maintenance Tracking",
    body: "Schedule, assign, and document maintenance across your operation so nothing slips through the cracks.",
    href: "/technology/beyond-scada/maintenance-tracking",
  },
  {
    title: "Asset Management",
    body: "Track every asset's history, condition, and lifecycle in the same platform your operators use every day.",
    href: "/technology/beyond-scada/asset-management",
  },
  {
    title: "Tasks",
    body: "Assign work, track progress, and keep your whole team aligned on what needs to happen next.",
    href: "/technology/beyond-scada/tasks",
  },
  {
    title: "Photo and Video Integration",
    body: "Attach photos and video from the field directly to assets, tasks, and work records for complete documentation.",
    href: "/technology/beyond-scada/photo-video-integration",
  },
  {
    title: "Knowledge Management",
    body: "Capture the expertise of your most experienced operators so it stays with your operation for years to come.",
    href: "/technology/beyond-scada/knowledge-management",
  },
  {
    title: "File Management",
    body: "Keep manuals, drawings, permits, and documentation organized, searchable, and accessible from anywhere.",
    href: "/technology/beyond-scada/file-management",
  },
];

export default function BeyondScada() {
  return (
    <>
      <Seo
        title="Beyond SCADA"
        description="CoStream goes beyond monitoring and control to give your team every tool needed to run smarter, safer, and more connected operations."
      />
      <PageHero
        headline="SCADA is Just the Beginning."
        subhead="CoStream goes beyond monitoring and control to give your team every tool needed to run smarter, safer, and more connected operations."
        intro="SCADA gives you visibility. CoStream gives you capability. Our Beyond SCADA suite extends your platform into the daily workflows that keep your operations and your community running at their best. From tracking maintenance to preserving institutional knowledge, everything lives in one place, connected to the assets and processes your team already depends on."
        image={{ src: IMAGES.beyondScada, alt: "Industrial pipes and valves against a wall" }}
      />
      <div style={{ paddingBlock: "var(--space-7)" }}>
        <InfoBlockList items={threePartCopy} />
      </div>
      <div style={{ paddingBlock: "var(--space-7)" }}>
        <CardGrid items={tiles} />
      </div>
    </>
  );
}
