import BulletList from "./BulletList";
import ComingSoonBadge from "./ComingSoonBadge";
import styles from "./FeatureBlock.module.css";

export default function FeatureBlock({
  id,
  eyebrow,
  tagline,
  copy,
  bullets,
  note,
  comingSoon = false,
}) {
  const paragraphs = Array.isArray(copy) ? copy : copy ? [copy] : [];
  // eyebrow is the block's name (e.g. "Real Time Monitoring") and is the
  // primary heading; tagline (e.g. "Live Data. Instant Awareness") is the
  // smaller supporting line beneath it. When only one is given, it stands
  // alone as the heading.
  const heading = eyebrow || tagline;
  const subheading = eyebrow ? tagline : null;

  return (
    <div className={styles.block} id={id}>
      {heading && (
        <h3 className={styles.heading}>
          {heading}
          {comingSoon && <ComingSoonBadge />}
        </h3>
      )}
      {subheading && <p className={styles.subheading}>{subheading}</p>}
      {paragraphs.map((paragraph) => (
        <p className={styles.copy} key={paragraph.slice(0, 40)}>
          {paragraph}
        </p>
      ))}
      {bullets && bullets.length > 0 && <BulletList items={bullets} />}
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}
