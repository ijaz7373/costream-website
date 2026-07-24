import { Link } from "react-router-dom";
import { NAV } from "../../content/navConfig";
import styles from "./Footer.module.css";

// Note: the source content document does not specify footer copy, only page
// content. This footer reuses the same nav data for a sitemap and includes a
// clearly-labeled placeholder contact block, per the placeholder-content rule.

function footerLinksFor(item) {
  if (item.type === "columns") {
    return item.columns.map((column) => ({
      label: column.heading,
      href: column.href,
    }));
  }
  if (item.type === "single") {
    return [item.landing, ...item.links];
  }
  return item.links;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <span className={styles.logo}>CoStream</span>
          <p className={styles.placeholder}>
            Placeholder content — footer address, phone, and social links were
            not provided in the source document.
          </p>
        </div>

        {NAV.map((item) => (
          <div key={item.label} className={styles.col}>
            <span className={styles.colHeading}>{item.label}</span>
            <ul className={styles.linkList}>
              {footerLinksFor(item).map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>© {year} CoStream. All rights reserved.</p>
      </div>
    </footer>
  );
}
