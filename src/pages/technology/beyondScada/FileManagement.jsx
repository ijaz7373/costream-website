import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "Asset-Linked Document Storage",
    copy: "Attach manuals, warranties, permits, and inspection reports directly to the assets they belong to. Every relevant document travels with the record it supports.",
  },
  {
    tagline: "Organized and Searchable",
    copy: "Find what you need quickly and confidently. Files are organized, tagged, and searchable from anywhere, on any device.",
  },
  {
    tagline: "Team-Wide Access, Single Source of Truth",
    copy: "Share documents across your team with confidence. Everyone works from the same current file, always aligned on the most current version.",
  },
  {
    tagline: "Audit and Compliance Support",
    copy: "Store regulatory documents, inspection records, and compliance reports in a way that is organized for retrieval when it matters most, making audits straightforward and your team audit-ready at all times.",
  },
  {
    tagline: "Secure and Controlled",
    copy: "Manage who can view, upload, and edit files with role-based access that protects sensitive information while giving every team member the access they need, exactly when they need it.",
  },
];

export default function FileManagement() {
  return (
    <>
      <Seo
        title="File Management"
        description="Organized, accessible file storage connected to the operations and assets that matter most."
      />
      <PageHero
        eyebrow="Beyond SCADA"
        headline="Every Document. In the Right Place. Every Time."
        subhead="Organized, accessible file storage connected to the operations and assets that matter most."
        intro="Organized, accessible documentation is the foundation of efficient, compliant operations. CoStream File Management gives your team a centralized, structured place to store, organize, and retrieve the documents that support your operations: manuals, permits, inspection reports, contracts, and everything in between. When the right document is always one click away, your team stays focused on the work that matters most."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
