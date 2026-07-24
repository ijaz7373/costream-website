import styles from "./BulletList.module.css";

export default function BulletList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        const key = typeof item === "string" ? item : item.label;
        return (
          <li className={styles.item} key={key}>
            {typeof item === "string" ? (
              item
            ) : (
              <>
                <strong>{item.label}:</strong> {item.text}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
