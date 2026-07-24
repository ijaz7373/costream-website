import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "Context-Connected Wiki",
    copy: "Knowledge articles live alongside the assets, processes, and operations they describe. The right information surfaces exactly where your team needs it, right within the operational context your team works in every day.",
  },
  {
    tagline: "Easy to Build, Easy to Find",
    copy: "If your team can write an email, they can contribute to the knowledge base. Create and update pages without technical expertise and find what you need through intuitive search.",
  },
  {
    tagline: "Living Documentation",
    copy: "Procedures, best practices, troubleshooting guides, and lessons learned evolve over time, always reflecting the real, current state of your operations.",
  },
  {
    tagline: "Onboarding That Scales",
    copy: "New team members get up to speed faster when institutional knowledge is organized, accessible, and searchable from their first day on the job. Team members arrive informed, contribute quickly, and build confidence from day one.",
  },
  {
    tagline: "Answers Ready When You Need Them",
    copy: "When knowledge is findable, teams work with greater accuracy, apply expertise more effectively, and spend more time moving forward.",
  },
];

export default function KnowledgeManagement() {
  return (
    <>
      <Seo
        title="Knowledge Management"
        description="A living knowledge base that captures institutional wisdom and puts it to work, every day, for everyone."
      />
      <PageHero
        eyebrow="Beyond SCADA"
        headline="Turn What Your Team Knows Into What Your Organization Keeps."
        subhead="A living knowledge base that captures institutional wisdom and puts it to work, every day, for everyone."
        intro="Every experienced operator carries valuable knowledge. CoStream Knowledge Management gives your organization a way to capture, organize, and share that expertise so it benefits your team today and for years to come, transforming the information your team generates every day into a searchable, shared, always-evolving resource."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
