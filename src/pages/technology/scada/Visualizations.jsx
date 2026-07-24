import Seo from "../../../components/blocks/Seo";
import PageHero from "../../../components/blocks/PageHero";
import FeatureBlockList from "../../../components/blocks/FeatureBlockList";

const blocks = [
  {
    eyebrow: "High Performance HMI",
    tagline: "Built for the Speed and Precision Your Operation Demands",
    copy: [
      "CoStream's High Performance HMI (Human Machine Interface) is engineered for operational environments where clarity, speed, and precision are non-negotiable. Designed around the principles of high-performance display design, CoStream's HMI delivers the critical information your operators need in a format that reduces cognitive load, supports rapid situational assessment, and enables decisive, confident action.",
      "Every element of the display — layout, color, hierarchy, and data density — is intentionally designed to serve the operator, not just present data. The result is an interface that performs as reliably as the systems it monitors.",
    ],
    bullets: [
      "High-performance display design principles with clear visual hierarchy",
      "Fast, responsive rendering even across large and complex system architectures",
      "Configurable displays tailored to specific processes, assets, and operational roles",
      "Alarm and status indicators that stand out immediately without cluttering the view",
      "Support for single and multi-monitor control room configurations",
      "Built for sustained use — reducing operator fatigue over long shifts",
    ],
  },
  {
    eyebrow: "Designed for Mobility",
    tagline: "Full Operational Visibility in the Palm of Your Hand",
    copy: [
      "The field doesn't have a desktop. CoStream's visualization platform is designed from the ground up to deliver a complete, high-quality operational experience on any device. smartphone, tablet, or workstation, without compromise. Whether your team is walking a facility, working a remote site, or responding from off-site, they have access to the same operational picture available in the control room.",
      "Mobile isn't an afterthought in CoStream, it's a design principle.",
    ],
    bullets: [
      "Fully responsive interface optimized for smartphones, tablets, and desktops",
      "Touch-friendly controls and navigation designed for field conditions",
      "Consistent, full-featured experience across all screen sizes and devices",
      "Role-appropriate views that surface the right information for the user's context",
      "Secure access from any internet-connected device, no special software required",
    ],
    note: "Designed for real-world field conditions — clear displays in varying light, easy navigation with one hand",
  },
  {
    eyebrow: "Unlimited Customization",
    tagline: "Your Operation Is Unique. Your Visualizations Should Be Too.",
    copy: [
      "No two operations look alike — and no two teams need the same view of their data. CoStream's visualization platform gives you the freedom to design displays, dashboards, and data views that reflect your specific processes, assets, workflows, and organizational structure, without limits.",
      "From the layout of a control screen to the arrangement of data on a field technician's mobile view, every element is configurable. Build the operational displays your team actually needs — and change them as your needs evolve.",
    ],
    bullets: [
      "Drag-and-drop display building with no coding required",
      "Unlimited custom displays, dashboards, and data views",
      "Full control over layout, data elements, color schemes, and visual hierarchy",
      "Asset-specific, process-specific, and role-specific display configurations",
      "Custom graphics, maps, and schematic overlays reflecting your actual infrastructure",
      "Templates to accelerate display creation across similar assets or sites",
    ],
  },
  {
    eyebrow: "Granular Security",
    tagline: "Everyone Sees What They Should. Nothing More",
    copy: [
      "Visualization is powerful — and what each user can see and interact with matters as much as how it looks. CoStream's granular security model ensures that every display, dashboard, and data view is governed by a precise permission structure aligned with your organizational roles, responsibilities, and compliance requirements.",
      "From read-only observation to full interactive control, every visual element can be scoped to the exact level of access each user or role is authorized to have.",
    ],
    bullets: [
      "User and role-based access control applied at the display and data level",
      "Read, interact, and configure permissions independently assignable",
      "Asset and location-specific visibility scoping",
      "Centralized security management across all displays and user groups",
      "Full audit trail of display access and configuration changes",
      "Supports complex organizational hierarchies and multi-site access structures",
    ],
  },
];

export default function Visualizations() {
  return (
    <>
      <Seo
        title="Visualizations"
        description="See Your Operation Clearly. Act on It Confidently."
      />
      <PageHero
        eyebrow="SCADA"
        headline="See Your Operation Clearly. Act on It Confidently"
        intro="Data has no value until it becomes understanding. CoStream's Visualization capabilities transform the continuous stream of operational data across your assets and systems into clear, intuitive, and actionable displays — purpose-built for the people who depend on them most. From high-performance HMI displays built for the control room to mobile-optimized views designed for the field, CoStream gives every member of your team exactly the visual context they need to make great decisions, wherever they are."
      />
      <FeatureBlockList blocks={blocks} />
    </>
  );
}
