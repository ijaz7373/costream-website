import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    eyebrow: "Alerts",
    tagline: "Know the Moment It Matters",
    copy: [
      "CoStream continuously monitors your connected assets and systems, automatically generating alerts the moment a condition crosses a defined threshold or an event requires attention. Whether it's an equipment reading outside normal range, a connectivity change, or a process condition that needs a human decision, CoStream ensures nothing goes unnoticed — and no alert goes undelivered.",
      "Every alert is configurable to your operational standards, so your team is notified about what matters to them, at the level of urgency it deserves, without being overwhelmed by noise that doesn't require action.",
    ],
    bullets: [
      "Real-time alert generation based on fully configurable thresholds and conditions",
      "Multi-level alert prioritization — from informational to critical",
      "Alerts tied directly to specific assets, systems, locations, or event types",
      "Complete alert history with time-stamping for accountability and review",
      "Acknowledgment tracking so every alert has a documented response",
      "Suppression and escalation rules to match your operational workflows",
    ],
  },
  {
    eyebrow: "Notifications",
    tagline: "Reach Your Team Wherever They Are",
    copy: "An alert that doesn't reach the right person at the right time is an opportunity lost. CoStream's notification system ensures that when an alert is triggered, the people who need to act receive it through the channels they rely on most — instantly and reliably. Notifications are fully configurable by user, role, shift, location, and condition type. Whether your team is at a workstation, in the field, or off-site, CoStream finds them with the information they need to respond with confidence.",
    bullets: [
      "Multi-channel delivery including email, SMS, push notifications, and in-platform alerts",
      "Role-based and user-specific notification routing",
      "Shift-aware scheduling so the right person is notified at the right time of day",
      "Escalation paths that ensure critical notifications are never left unacknowledged",
      "Notification history and delivery confirmation for full accountability",
      "Configurable notification frequency and grouping to match operational preferences",
    ],
  },
];

export default function AlertsNotifications() {
  return (
    <>
      <Seo
        title="Alerts and Notifications"
        description="The Right Information. The Right Person. The Right Moment."
      />
      <PageHero
        eyebrow="Alerts and Notifications"
        headline="The Right Information. The Right Person. The Right Moment"
        intro="In operations, timing is everything. CoStream's Alerts and Notifications system ensures that the moment something demands attention, the people who need to know are already informed. From critical threshold breaches to routine status updates, CoStream delivers intelligent, configurable alerts that keep your team ahead of events — not chasing them. Because the fastest response begins with the fastest, most accurate notification."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
