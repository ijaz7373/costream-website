import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV } from "../../content/navConfig";
import styles from "./MobileNav.module.css";

export default function MobileNav({ open, onClose }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!open) return null;

  return (
    <div id="mobile-nav" className={styles.drawer}>
      <ul className={styles.list}>
        {NAV.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <li key={item.label} className={styles.item}>
              <button
                type="button"
                className={styles.itemButton}
                aria-expanded={isExpanded}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                {item.label}
                <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
              </button>

              {isExpanded && (
                <div className={styles.panel}>
                  <p className={styles.blurb}>{item.blurb}</p>

                  {item.type === "columns" &&
                    item.columns.map((column) => (
                      <div key={column.heading} className={styles.group}>
                        <Link to={column.href} onClick={onClose} className={styles.groupHeading}>
                          {column.heading}
                        </Link>
                        <ul className={styles.sublist}>
                          {column.links.map((link) => (
                            <li key={link.href}>
                              <Link to={link.href} onClick={onClose}>
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                  {item.type === "single" && (
                    <div className={styles.group}>
                      <Link
                        to={item.landing.href}
                        onClick={onClose}
                        className={styles.groupHeading}
                      >
                        {item.landing.label}
                      </Link>
                      <ul className={styles.sublist}>
                        {item.links.map((link) => (
                          <li key={link.href}>
                            <Link to={link.href} onClick={onClose}>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.type === "flat" && (
                    <ul className={styles.sublist}>
                      {item.links.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href} onClick={onClose}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
