import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    eyebrow: "Expert Designed Reports",
    tagline: "Professionally Crafted. Operationally Relevant",
    copy: "CoStream's library of expert-designed reports reflects deep operational expertise — built around the information that matters most, presented in formats that make findings immediately clear and actionable. Every CoStream report template has been designed with the end user in mind: the operator reviewing daily performance, the manager presenting to leadership, and the compliance officer submitting to a regulatory agency.",
    bullets: [
      "Professionally designed report templates built by operational and industry experts",
      "Clear visual hierarchy that brings the most important findings to the surface",
      "Structured formats appropriate for operational, management, and compliance audiences",
      "Consistent, polished presentation across all report types and outputs",
      "Template library covering the most common operational reporting needs",
      "Fully customizable starting points for organization-specific requirements",
      "Exact match to regulatory agency requirements",
      "Graphics",
      "Excel and printer friendly",
      "Scheduled and emailed to non-CoStream users",
      "Unlimited variations",
    ],
  },
];

export default function Reporting() {
  return (
    <>
      <Seo
        title="Reporting"
        description="Reports Built for the People Who Rely on Them."
      />
      <PageHero
        eyebrow="SCADA"
        headline="Reports Built for the People Who Rely on Them"
        intro="Reporting in operational environments serves two audiences with very different needs: the regulatory agencies that require precise, formatted compliance documentation, and the operational teams that need clear, flexible performance intelligence. CoStream's reporting platform serves both with expert-designed report templates, exact alignment to regulatory requirements, and the flexibility to generate, customize, schedule, and deliver reports in any format your stakeholders need."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
