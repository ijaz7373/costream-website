import { Link } from "react-router-dom";
import styles from "./MegaMenu.module.css";

export default function MegaMenu({ item }) {
  return (
    <div className={styles.panel}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.blurb}>{item.blurb}</p>

        {item.type === "columns" && (
          <div className={styles.columns}>
            {item.columns.map((column) => (
              <div key={column.heading} className={styles.column}>
                <Link to={column.href} className={styles.columnHeading}>
                  {column.heading}
                </Link>
                {column.links.length > 0 && (
                  <ul className={styles.linkList}>
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link to={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {item.type === "single" && (
          <div className={styles.column}>
            <Link to={item.landing.href} className={styles.columnHeading}>
              {item.landing.label}
            </Link>
            <ul className={styles.linkList}>
              {item.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.type === "flat" && (
          <ul className={styles.flatList}>
            {item.links.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
