import { Link } from "react-router-dom";
import styles from "./CTALink.module.css";

export default function CTALink({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  return (
    <Link to={href} className={`${styles.cta} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
