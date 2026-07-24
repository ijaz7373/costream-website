import Seo from "../../components/blocks/Seo";
import PageHero from "../../components/blocks/PageHero";
import FeatureBlockList from "../../components/blocks/FeatureBlockList";
import { IMAGES } from "../../content/images";

// Note: the doc's own content-key legend tags all 7 items below with ⬆️
// ("content that belongs on the associated page"), so they render as
// on-page sections here rather than as separate routes. See Assumption A
// in the build plan.
const blocks = [
  {
    tagline: "On Going Service",
    copy: "CoStream is a managed service, not just software. Your platform is continuously monitored, maintained, and updated by our team, so your staff stays focused on operations rather than system administration. From onboarding through daily operations, CoStream functions as an extension of your team.",
  },
  {
    tagline: "Open Compatibility",
    copy: "CoStream integrates with the OT protocols, SCADA systems, and operational tools already in your environment. There is no requirement to replace existing infrastructure to gain platform value. Open compatibility means your current investments continue to work, and CoStream grows alongside them.",
  },
  {
    tagline: "Hardware Agnostic",
    copy: "CoStream can run on the hardware you already own. The platform is not tied to proprietary appliances or vendor-specific equipment, giving your team the flexibility to deploy on existing devices or scale with commodity hardware. You control the infrastructure; CoStream delivers the platform.",
  },
  {
    tagline: "API Plugins",
    copy: "CoStream's API architecture makes it straightforward to connect with third-party systems, data historians, asset management platforms, and utility billing software. Plugins extend platform functionality without requiring custom development from your team. The result is a connected operational environment built around your workflow, not around ours.",
  },
  {
    tagline: "Remote Access",
    copy: "CoStream provides secure, role-based remote access to your OT environment, enabling authorized personnel to monitor and manage systems from anywhere. Access is logged, controlled, and auditable, giving IT teams confidence that remote connectivity does not introduce unmanaged risk. For utilities with distributed infrastructure, this capability reduces the need for on-site response to routine operational tasks.",
  },
  {
    tagline: "MFA/SSO/Passkeys",
    copy: "CoStream supports modern authentication methods including multi-factor authentication, single sign-on, and passkey-based login. These controls ensure that access to your operational environment is protected by credentials that meet current security standards. IT administrators can enforce authentication policies consistently across users and roles without managing separate credential systems.",
  },
  {
    tagline: "Infrastructure",
    copy: "CoStream is built on enterprise-grade cloud infrastructure designed for the availability and performance that utility operations demand. The platform leverages redundant architecture, encrypted data transmission, and secure cloud hosting to ensure your operational data is protected and accessible when you need it. Whether you are managing a single facility or multiple sites, CoStream's infrastructure scales to meet your environment without requiring on-premises server investments or ongoing hardware maintenance from your team.",
  },
];

export default function Ecosystem() {
  return (
    <>
      <Seo
        title="Ecosystem"
        description="An architecture built on open compatibility, hardware flexibility, modern security, and ongoing service from real people."
      />
      <PageHero
        headline="Open, Secure, and Supported by Design"
        subhead="An architecture built on open compatibility, hardware flexibility, modern security, and ongoing service from real people."
        intro="The CoStream ecosystem is engineered so your platform works with what you have and grows with where you're going. Hardware-agnostic connectivity and open compatibility protect your existing investments, while API plugins extend the platform to meet your specific needs. Secure remote access with MFA, SSO, and passkey support keeps your systems protected, and robust infrastructure keeps them running. Behind it all is ongoing service from a team that knows your operation. Explore the full ecosystem below."
        image={{ src: IMAGES.ecosystem, alt: "Data server room hardware" }}
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
