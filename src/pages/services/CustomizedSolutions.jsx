import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "What We Build",
    bullets: [
      {
        label: "Integrations with the systems you value",
        text: "If you have invested in a GIS system, we can make that data available to your CoStream users. The tools you rely on become part of one connected environment instead of islands of information.",
      },
      {
        label: "Your legacy data, still working for you",
        text: "Moving to CoStream does not mean leaving your history behind. We bring legacy data forward so it remains part of your analytics, and we can consolidate two or three aging systems into one homogeneous solution you can actually analyze.",
      },
      {
        label: "Development depth that stands alone",
        text: "Hardware, software, networking: our team works across all of it. When your need calls for genuine software engineering, you have a development bench that most providers in this industry simply do not carry.",
      },
      {
        label: "Built for you, on your timeline",
        text: "When you need a capability that does not exist yet, we can build it as a dedicated engagement, delivered on your schedule.",
      },
    ],
  },
];

export default function CustomizedSolutions() {
  return (
    <>
      <Seo
        title="Customized Solutions"
        description="CoStream's development team connects your platform to the systems, data, and workflows that make your operation unique."
      />
      <PageHero
        eyebrow="Services"
        headline="Software Built Around the Way You Work"
        subhead="CoStream's development team connects your platform to the systems, data, and workflows that make your operation unique."
        intro="Every utility has systems it has invested in, data it depends on, and ways of working that took years to refine. Customized solutions is CoStream's software development service, and its job is to make the platform fit your world. Our in-house developers build the integrations, tools, and data connections that off-the-shelf software cannot, with the full range of hardware, software, and networking expertise behind them."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
