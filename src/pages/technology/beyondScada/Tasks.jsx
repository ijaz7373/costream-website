import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "Quick Task Creation",
    copy: "Assign tasks in seconds from any device, in the field or at a desk. Add context, attach files, link to assets, and set deadlines with ease.",
  },
  {
    tagline: "Team-Wide Visibility",
    copy: "Managers get a clear, real-time picture of workload and progress across the team. Every team member stays on track and supported, with full visibility keeping the whole operation aligned.",
  },
  {
    tagline: "Connected to Your Operations",
    copy: "Link tasks directly to assets, locations, events, or work orders in CoStream. Every task carries the operational context that helps your team work smarter.",
  },
  {
    tagline: "Priority and Status Tracking",
    copy: "Flag urgent items, move tasks through a clear workflow from open to complete, and keep your operation moving forward with every priority covered.",
  },
  {
    tagline: "Accountability Built In",
    copy: "Every task is timestamped and attributed, creating a clear, professional record that builds team trust and supports accountability.",
  },
];

export default function Tasks() {
  return (
    <>
      <Seo
        title="Tasks"
        description="Simple, powerful task management built for the pace and complexity of operations teams."
      />
      <PageHero
        eyebrow="Beyond SCADA"
        headline="The Right Work, to the Right Person, at the Right Time."
        subhead="Simple, powerful task management built for the pace and complexity of operations teams."
        intro="Operations teams accomplish more when work is clearly assigned, tracked, and visible to everyone. CoStream Tasks gives your team a shared, structured way to assign, track, and complete work, keeping everyone aligned and accountable while maintaining the speed your operation demands. When everyone knows what is on their plate, things get done."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
