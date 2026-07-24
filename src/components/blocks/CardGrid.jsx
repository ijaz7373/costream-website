import CTALink from "./CTALink";
import styles from "./CardGrid.module.css";

export default function CardGrid({ heading, intro, items }) {
  return (
    <section className="container">
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      {intro && <p className={styles.intro}>{intro}</p>}
      <div className={styles.grid}>
        {items.map((item) => (
          <article className={styles.card} key={item.title}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
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
