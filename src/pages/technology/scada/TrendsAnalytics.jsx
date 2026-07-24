import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    eyebrow: "Ad Hoc Analysis",
    tagline: "Answer Any Question Your Data Can Answer. On Your Schedule",
    copy: [
      "Operational questions don't follow a reporting calendar. When your team needs to understand a trend, investigate a pattern, or explore a data relationship, CoStream's ad hoc analysis tools put that capability directly in their hands — no IT request required, no waiting for a scheduled report, no predetermined format standing between your team and the answers they need.",
      "Any data point. Any time range. Any combination of assets, systems, or variables. Ad hoc analysis means the question drives the investigation, not the other way around.",
    ],
    bullets: [
      "Intuitive, self-service analysis tools accessible to operational users of all technical levels",
      "Query and explore any combination of operational data across assets, systems, and timeframes",
      "On-demand trend visualization with flexible time range and data resolution controls",
      "Comparative analysis across assets, sites, time periods, and operating conditions",
      "No predefined templates required — follow the data wherever the question leads",
      "Save and revisit custom analyses for ongoing monitoring or future reference",
    ],
  },
  {
    eyebrow: "Dashboards",
    tagline: "The Operational Picture Your Team Needs. Always Ready",
    copy: [
      "A great dashboard doesn't just display data — it answers the questions your team asks every day before they have to ask them. CoStream's dashboard capabilities allow your organization to build, configure, and maintain dynamic operational views that put the most relevant data for each team, role, and process in one place — updated in real time, accessible anywhere.",
      "From executive-level operational summaries to asset-specific performance views for field teams, every dashboard is built around the people who use it.",
    ],
    bullets: [
      "Fully configurable dashboards built from any combination of operational data",
      "Real-time data refresh ensuring dashboards always reflect current conditions",
      "Role-specific and team-specific dashboard configurations",
      "Multi-asset, multi-site, and cross-system views in a single dashboard",
      "KPI and performance metric visualization with configurable targets and benchmarks",
      "Accessible via desktop and mobile with a consistent, full-featured experience",
    ],
  },
  {
    eyebrow: "Share/Export Analysis",
    tagline: "Great Insights Are Only Valuable When They Reach the Right People",
    copy: [
      "Analysis that stays inside a platform serves only the people who created it. CoStream makes it easy to share operational insights, trend analyses, and dashboard views with anyone who needs them — in the format that works best for the way they use the information.",
      "Whether your team is sharing findings in a meeting, delivering insights to leadership, or providing data to an external partner, CoStream ensures the right information gets to the right people in a form they can act on.",
    ],
    bullets: [
      "One-click export of analyses, charts, and data sets in multiple formats",
      "Shareable dashboard links for real-time views accessible to authorized users",
      "Export to Excel, PDF, and image formats for use in presentations and reports",
      "Scheduled delivery of analyses to internal and external recipients",
      "Configurable sharing permissions that maintain data security and access controls",
      "Annotation and commentary tools for adding context to shared analyses",
    ],
  },
];

export default function TrendsAnalytics() {
  return (
    <>
      <Seo
        title="Trends & Analytics"
        description="Turn Operational Data Into Operational Intelligence."
      />
      <PageHero
        eyebrow="SCADA"
        headline="Turn Operational Data Into Operational Intelligence"
        intro="Every connected asset, every sensor reading, and every logged event in your operation is a data point with a story to tell. CoStream's Trends & Analytics capabilities give your team the tools to explore that data freely, visualize it meaningfully, and share it broadly — so the intelligence embedded in your operational history is always available to the people and decisions that need it most."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
