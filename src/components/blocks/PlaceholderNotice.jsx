import styles from "./PlaceholderNotice.module.css";

export default function PlaceholderNotice({ children }) {
  return (
    <div className={`container ${styles.wrap}`}>
      <div className={styles.notice} role="note">
        <p className={styles.label}>Placeholder content</p>
        <p>{children}</p>
      </div>
    </div>
  );
}
