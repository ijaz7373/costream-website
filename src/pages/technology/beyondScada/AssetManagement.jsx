import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    tagline: "Comprehensive Asset Registry",
    copy: "Catalog every asset with the attributes that matter: model, serial number, installation date, location, vendor, warranty status, and any custom fields your operation requires.",
  },
  {
    tagline: "Full Lifecycle Tracking",
    copy: "Follow each asset from installation through maintenance, upgrades, and eventual replacement, with a complete, connected history that informs every decision along the way.",
  },
  {
    tagline: "Integrated Across Your Platform",
    copy: "Asset data flows naturally into maintenance records, work orders, documents, photos, and tasks. Every team member gets the context they need, directly within the platform they already use.",
  },
  {
    tagline: "Location Awareness",
    copy: "Know where every asset lives within your system, making it easier to plan field work, dispatch crews efficiently, and respond to incidents with confidence.",
  },
  {
    tagline: "Informed Capital Planning",
    copy: "Use asset age, condition, and service history to make smarter long-term infrastructure investment decisions, with real data to support every conversation about budget and capital priorities.",
  },
];

export default function AssetManagement() {
  return (
    <>
      <Seo
        title="Asset Management"
        description="A complete, living record of every asset in your system, connected, searchable, and always up to date."
      />
      <PageHero
        eyebrow="Beyond SCADA"
        headline="Know Every Asset. Understand Every Story."
        subhead="A complete, living record of every asset in your system, connected, searchable, and always up to date."
        intro="Great operations depend on knowing what you have, where it is, and how it is performing. CoStream Asset Management gives your team a centralized, connected view of every piece of infrastructure in your network, so decisions are grounded in facts, and every team member has the information they need, exactly when they need it."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
