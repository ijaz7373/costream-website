import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "Analysis on a Different Level",
    bullets: [
      {
        label: "Interpretation, not just visualization",
        text: "Trend charts show you what happened. Our team helps you understand why it happened, what it means for your operation, and what analysis to build next. Every answer opens the door to a better question, and we are there for both.",
      },
      {
        label: "Data science credentials",
        text: "The people behind CoStream analytics trained in data science. The calculations and data transformations we can perform, and the intelligence we continue to add through AI, put a depth of capability behind your data that goes far beyond standard reporting.",
      },
      {
        label: "Smarter data, cleaner answers",
        text: "Our platform knows when equipment is under maintenance and automatically excludes that data from aggregations. Your averages, trends, and reports reflect how your system actually performs, without maintenance noise skewing the picture.",
      },
      {
        label: "Reports that mean something",
        text: "Because the analysis underneath is deeper, the reports that come out of your system are more meaningful and more useful, whether they are going to your operators, your board, or your regulators.",
      },
      {
        label: "A long-term analytics partner",
        text: "Because CoStream is an ongoing service, analytics is not a one-time deliverable. We track the long-term questions with you, learn alongside your team, and keep building as your operation grows.",
      },
    ],
  },
];

export default function Analytics() {
  return (
    <>
      <Seo
        title="Analytics"
        description="CoStream pairs powerful analytics with real data scientists who help you understand your system and act on what you learn."
      />
      <PageHero
        eyebrow="Services"
        headline="Data That Tells You What It Means"
        subhead="CoStream pairs powerful analytics with real data scientists who help you understand your system and act on what you learn."
        intro="Any modern system can draw you a graph. CoStream gives you the graph and a person who can tell you what it means. Our analytics service is powered by a team trained in data science, working with a platform intelligent enough to know when data should count and when it should not. The result is analysis you can trust and reports that actually inform decisions, backed by people who help you build on every insight."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
