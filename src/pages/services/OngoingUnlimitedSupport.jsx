import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "Support That Works the Way You Do",
    bullets: [
      {
        label: "Your team, on the line",
        text: "When you call CoStream, you reach the people who know your system inside and out. We even call you back if you ring and hang up, because we know operators do not leave voicemails.",
      },
      {
        label: "Real-time resolution",
        text: "Notice something off during your rounds? Call us right then. There is no punch list to maintain and nothing to remember for the next site visit. Small issues get handled the moment you spot them, before they become big ones.",
      },
      {
        label: "Fluent in OT and IT",
        text: "Our specialty is operational technology, but we speak IT fluently. We work directly with your IT staff and service providers, translating between both worlds so nothing gets lost in the middle.",
      },
      {
        label: "Troubleshooting and warm handoffs",
        text: "We know how your system works, so when something is not behaving, we help you get to the root of it. And when a problem calls for an equipment manufacturer or outside service provider, we broker the escalation and hand them everything they need to arrive prepared. You get resolutions without the runaround.",
      },
      {
        label: "A standing rhythm",
        text: "Support is not just reactive. Recurring check-in meetings give your team a regular forum to raise questions, review how the system is running, and plan what comes next.",
      },
    ],
  },
  {
    tagline: "What Unlimited Means",
    copy: "If it can be done safely and effectively by our remote team, it is included in your service. That covers the everyday questions, adjustments, and fixes that keep your operation running smoothly. When a need goes beyond that, such as work that requires someone on site or a new platform feature built on your timeline, we will scope it clearly with you before anything moves forward. No surprises, ever.",
  },
];

export default function OngoingUnlimitedSupport() {
  return (
    <>
      <Seo
        title="Ongoing Unlimited Support"
        description="Unlimited support from the team that built your system, included with your CoStream service."
      />
      <PageHero
        eyebrow="Services"
        headline="Real People. Real Answers. Whenever You Need Them."
        subhead="Unlimited support from the team that built your system, included with your CoStream service."
        intro="CoStream support starts with a promise: you will always talk to a real person, and it will be the same people who designed, installed, and maintain your system. No ticket queues, no call centers, no starting from scratch with a stranger. Whether you prefer a phone call, a text, or an email, we support you the way you like to communicate. And because support is unlimited, you never have to weigh whether an issue is worth the call."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
