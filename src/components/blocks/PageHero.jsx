import CTALink from "./CTALink";
import styles from "./PageHero.module.css";

export default function PageHero({
  eyebrow,
  headline,
  subhead,
  intro,
  ctaLabel,
  ctaHref,
  align = "left",
  image,
}) {
  const paragraphs = Array.isArray(intro) ? intro : intro ? [intro] : [];
  const hasImage = Boolean(image);

  return (
    <section className={`${styles.hero} ${align === "center" ? styles.center : ""}`}>
      <div className={`container ${hasImage ? styles.withImage : ""}`}>
        <div className={styles.copy}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.headline}>{headline}</h1>
          {subhead && <p className={styles.subhead}>{subhead}</p>}
          {paragraphs.map((paragraph) => (
            <p className={styles.intro} key={paragraph.slice(0, 40)}>
              {paragraph}
            </p>
          ))}
          {ctaLabel && ctaHref && (
            <div className={styles.ctaWrap}>
              <CTALink href={ctaHref}>{ctaLabel}</CTALink>
            </div>
          )}
        </div>
        {hasImage && (
          <div className={styles.imageWrap}>
            <img src={image.src} alt={image.alt || ""} className={styles.image} />
          </div>
        )}
      </div>
    </section>
  );
}
