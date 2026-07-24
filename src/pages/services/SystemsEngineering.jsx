import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "Engineering Without Boundaries",
    bullets: [
      {
        label: "Every option on the table",
        text: "Because the CoStream platform can integrate with virtually anything, we are never limited to one vendor's catalog or one way of doing things. Where others can only offer what they sell, we can design from the full range of what the market offers, and recommend what is genuinely right for you.",
      },
      {
        label: "Solutions sized to the need",
        text: "Need one measurement for the next three months? We will design a low-cost solution that gets you the data without overbuilding. Planning infrastructure for the next thirty years? We will engineer for the long haul. The right answer depends on your goals, and that is always where we start.",
      },
      {
        label: "We know the players",
        text: "Instrumentation providers, equipment manufacturers, service contractors: we know them, and we work with them every day. That market knowledge means faster sourcing, better pricing insight, and recommendations grounded in real-world experience rather than spec sheets.",
      },
      {
        label: "Honest tradeoffs, clear costs",
        text: "Every option comes with a straightforward account of what it costs, what it delivers, and where its limits are. You make the decision with complete information, and we make it happen.",
      },
    ],
  },
];

export default function SystemsEngineering() {
  return (
    <>
      <Seo
        title="Systems Engineering"
        description="When you want your system to do something new, CoStream figures out the best way to get it done."
      />
      <PageHero
        eyebrow="Services"
        headline="New Capabilities, Engineered Around Your Goals"
        subhead="When you want your system to do something new, CoStream figures out the best way to get it done."
        intro="Want to measure flow in a manhole? Add monitoring to a remote site? Bring a new process online? Systems engineering is where CoStream turns I wish we could into here is how we will. We evaluate what your system has today, lay out your options with honest costs and tradeoffs, and design the approach that best fits your goals, your budget, and your timeline."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
