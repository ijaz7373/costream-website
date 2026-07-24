import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "Scheduled and Preventive Maintenance",
    copy: "Build recurring maintenance schedules tied directly to your assets. Define intervals, assign responsibility, and let CoStream keep track so every task is clearly owned and every interval is covered.",
  },
  {
    tagline: "Work Order Management",
    copy: "Create, assign, and close work orders from the field or the office. Every step is logged, timestamped, and fully traceable, giving supervisors confidence and teams clear accountability.",
  },
  {
    tagline: "Asset-Linked Service History",
    copy: "Every maintenance action is attached to the specific asset it affected, building a rich service history that informs future decisions and supports long-term planning.",
  },
  {
    tagline: "Real-Time Status Visibility",
    copy: "See open, in-progress, and completed work at a glance. Supervisors stay informed and teams stay aligned, with full visibility keeping everyone on the same page.",
  },
  {
    tagline: "Compliance-Ready Recordkeeping",
    copy: "Maintain documentation that supports regulatory reporting and audit readiness as a natural byproduct of your day-to-day work, seamlessly integrated into how your team already operates.",
  },
];

export default function MaintenanceTracking() {
  return (
    <>
      <Seo
        title="Maintenance Tracking"
        description="Proactive maintenance tracking that keeps your assets and your team performing at their best."
      />
      <PageHero
        eyebrow="Beyond SCADA"
        headline="Stay Ahead of the Work Before the Work Stays Ahead of You."
        subhead="Proactive maintenance tracking that keeps your assets and your team performing at their best."
        intro="Proactive maintenance is the foundation of efficient, reliable operations. CoStream Maintenance Tracking integrates directly with your operational environment, giving your team a clear, organized view of what needs attention, when, and why, so every asset stays ahead of schedule and every operation runs smoothly. It is the kind of capability that defines a well-run operation."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
