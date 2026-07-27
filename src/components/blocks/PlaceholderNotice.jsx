import styles from "./PlaceholderNotice.module.css";

export default function PlaceholderNotice({ children }) {
  return (
    <div className={`container ${styles.wrap}`}>
      <div className={styles.notice} role="note">
        <div className={styles.iconBadge}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={styles.icon}
          >
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M8 8h8M8 12h8M8 16h5" />
          </svg>
        </div>
        <p className={styles.label}>Placeholder content</p>
        <span className={styles.underline} aria-hidden="true" />
        <p className={styles.body}>{children}</p>
      </div>
    </div>
  );
}
