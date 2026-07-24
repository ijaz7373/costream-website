import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "Optimization in Practice",
    bullets: [
      {
        label: "Real results, not theory",
        text: "For one treatment plant, our analysis of dissolved oxygen data led to aeration adjustments that improved process performance. For another client, we identified a simple float repositioning that dramatically reduced unnecessary pump starts, cutting wear on critical equipment. These are the kinds of findings that come from engineers who look at your data with fresh eyes and deep experience.",
      },
      {
        label: "A system that evolves with you",
        text: "Systems get programmed around the needs of a moment, and needs change. In our regular check-ins, questions like why was it set up this way become real conversations: here is what the original thinking was, here is how your operation has changed, and here are your options now. Your system keeps pace with your operation instead of falling behind it.",
      },
      {
        label: "The engineering to back it up",
        text: "Optimization recommendations are only as good as the people making them. CoStream brings genuine process and controls engineering expertise to every analysis, so the changes we suggest are grounded, practical, and safe to implement.",
      },
      {
        label: "Learning across dozens of systems",
        text: "Every utility we support makes us smarter for all the others. When we solve a problem at one plant, that knowledge travels. You benefit from the collective experience of an entire portfolio of operations like yours.",
      },
    ],
  },
];

export default function ProcessOptimization() {
  return (
    <>
      <Seo
        title="Process Optimization"
        description="CoStream engineers study how your system runs and find the adjustments that save energy, reduce wear, and improve performance."
      />
      <PageHero
        eyebrow="Services"
        headline="Make a Good System Run Even Better"
        subhead="CoStream engineers study how your system runs and find the adjustments that save energy, reduce wear, and improve performance."
        intro="Your system generates a constant stream of information about how it is performing. CoStream puts engineers on it. We analyze how your processes are running, spot the opportunities, and recommend specific changes that make measurable differences. And because we support dozens of utilities facing the same challenges you do, the lessons we learn anywhere become improvements we can offer everywhere."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
