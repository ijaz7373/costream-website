import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "How We Manage Your Project",
    bullets: [
      {
        label: "An agent on your side",
        text: "Think of us the way a school district thinks of its construction manager. When a project involves IT providers, OT contractors, equipment vendors, and your own staff, someone needs to run the show on your behalf. That is the role we play, coordinating all the technical parties even when the work is not ours, so you do not have to.",
      },
      {
        label: "A clear plan, communicated",
        text: "You get a schedule that tells you what is going to happen and when. As conditions change, the plan flexes and you stay informed. Involvement is always available to you and never required of you.",
      },
      {
        label: "Agile and iterative by design",
        text: "We deliver in steady, verifiable steps rather than one big reveal. Each phase builds on a working system, which means progress you can see and a project that never puts your operation at risk.",
      },
      {
        label: "Included, not extra",
        text: "Project management is not a line item we add to your bill. It is simply how CoStream works, on every project, from a single instrument addition to a full system deployment.",
      },
    ],
  },
];

export default function ProjectManagement() {
  return (
    <>
      <Seo
        title="Project Management"
        description="CoStream coordinates every moving piece of your project so you always know what is happening, when, and why."
      />
      <PageHero
        eyebrow="Services"
        headline="Your Project, Handled from Start to Finish"
        subhead="CoStream coordinates every moving piece of your project so you always know what is happening, when, and why."
        intro="Every CoStream project comes with genuine project management. We set the schedule, coordinate the players, and keep you informed at every step, so you are never left wondering when the work will happen or what comes next. Our approach strikes a balance between organized and flexible: structured enough that nothing falls through the cracks, adaptable enough to work around the realities of a running plant."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
