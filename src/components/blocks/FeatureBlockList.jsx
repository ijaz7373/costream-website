import FeatureBlock from "./FeatureBlock";
import styles from "./FeatureBlockList.module.css";

export default function FeatureBlockList({ blocks }) {
  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.grid}>
        {blocks.map((block) => (
          <FeatureBlock key={block.eyebrow || block.tagline} {...block} />
        ))}
      </div>
    </section>
  );
}
