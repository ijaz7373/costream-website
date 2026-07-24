import FeatureBlock from "./FeatureBlock";

export default function FeatureBlockList({ blocks }) {
  return (
    <section className="container" style={{ paddingBlock: "var(--space-7)" }}>
      {blocks.map((block) => (
        <FeatureBlock key={block.eyebrow || block.tagline} {...block} />
      ))}
    </section>
  );
}
