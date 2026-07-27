import CTALink from "./CTALink";
import { FeatureIcon } from "./icons";
import styles from "./CardGrid.module.css";

export default function CardGrid({ heading, intro, items }) {
  return (
    <section className="container">
      {heading && (
        <>
          <h2 className={styles.heading}>{heading}</h2>
          <span className={`${styles.underline} ${styles.headingUnderline}`} aria-hidden="true" />
        </>
      )}
      {intro && <p className={styles.intro}>{intro}</p>}
      <div className={styles.grid}>
        {items.map((item) => (
          <article className={styles.card} key={item.title}>
            <div className={styles.iconBadge}>
              <FeatureIcon label={item.title} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <span className={styles.underline} aria-hidden="true" />
            <p className={styles.cardBody}>{item.body}</p>
            {item.href && (
              <CTALink href={item.href} variant="text">
                {item.ctaLabel || "Read More"}
              </CTALink>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
