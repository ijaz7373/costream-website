import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV } from "../../content/navConfig";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import styles from "./Header.module.css";

export default function Header() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpenIndex(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.logo}>
          CoStream
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV.map((item, index) => (
              <li key={item.label} className={styles.navItem}>
                <button
                  type="button"
                  className={styles.navButton}
                  aria-haspopup="true"
                  aria-expanded={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  onMouseEnter={() => setOpenIndex(index)}
                >
                  {item.label}
                  <span className={styles.chevron} aria-hidden="true">
                    ▾
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.mobileToggle}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="visually-hidden">
            {mobileOpen ? "Close menu" : "Open menu"}
          </span>
          <span className={styles.hamburger} aria-hidden="true" />
        </button>
      </div>

      {openIndex !== null && (
        <div onMouseLeave={() => setOpenIndex(null)}>
          <MegaMenu item={NAV[openIndex]} />
        </div>
      )}

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
