import { FeatureIcon } from "./icons";
import styles from "./InfoBlockList.module.css";

export default function InfoBlockList({ heading, items }) {
  return (
    <section className="container">
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <div className={styles.grid}>
        {items.map((item) => (
          <div className={styles.block} key={item.heading}>
            <div className={styles.iconBadge}>
              <FeatureIcon label={item.heading} className={styles.icon} />
            </div>
            <h3 className={styles.blockHeading}>{item.heading}</h3>
            <span className={styles.underline} aria-hidden="true" />
            <p className={styles.blockBody}>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
