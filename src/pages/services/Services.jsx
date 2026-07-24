import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import CardGrid from "../../components/blocks/CardGrid";
import { IMAGES } from "../../content/images";

const offerings = [
  {
    title: "Ongoing Unlimited Support",
    body: "Live help from real people who know your system, through whatever channel you prefer.",
    href: "/services/ongoing-unlimited-support",
  },
  {
    title: "Project Management",
    body: "A single point of coordination for every project, from planning through go-live.",
    href: "/services/project-management",
  },
  {
    title: "Process Optimization",
    body: "Engineering insight that helps your treatment processes and equipment run at their best.",
    href: "/services/process-optimization",
  },
  {
    title: "Systems Engineering",
    body: "Expert guidance for adding new capabilities, designed around your goals and budget.",
    href: "/services/systems-engineering",
  },
  {
    title: "Customized Solutions",
    body: "Software development that connects CoStream to the systems and data you already rely on.",
    href: "/services/customized-solutions",
  },
  {
    title: "Analytics",
    body: "Data science that goes beyond trends to tell you what your system is really doing.",
    href: "/services/analytics",
  },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Everything You Need. All Included."
      />
      <PageHero
        eyebrow="Services"
        headline="Everything You Need. All Included."
        intro={[
          "CoStream is a managed service built around one simple idea: once you are on the platform, our people are your people. The services below come standard with every CoStream partnership. There are no tiers to upgrade through and no menu of billable extras. If it can be done safely and effectively by our remote team, it is included in your service.",
          "That means unlimited support from the people who know your system. It means project management that keeps every upgrade organized and on schedule. It means engineers who help your processes run better year after year, and data scientists who turn your operational data into answers. It is the kind of ongoing partnership that keeps your system, and your team, getting better over time.",
        ]}
        image={{ src: IMAGES.services, alt: "Team meeting around a table" }}
      />
      <div style={{ paddingBlock: "var(--space-7)" }}>
        <CardGrid
          heading="What Comes with Every CoStream Partnership"
          items={offerings}
        />
      </div>
    </>
  );
}
