import styles from "./index.module.sass";
import { usePathname } from "next/navigation";

export default function Steps() {
  const pathname = usePathname();

  return (
    <div className={styles.carSelection}>
      <div className={styles.carSelection__steps}>
        <div className={styles.carSelection__active}>Avtomobil tanlash</div>
        <span
          className={
            pathname === "/choose-place"
              ? styles.carSelection__spanActive
              : styles.carSelection__spanNotActive
          }
        ></span>
        <div
          className={
            pathname === "/choose-place"
              ? styles.carSelection__active
              : styles.carSelection__notActive
          }
        >
          Joy tanlash
        </div>
        <span className={styles.carSelection__spanNotActive}></span>
        <div className={styles.carSelection__notActive}>Tasdiqlash</div>
      </div>
    </div>
  );
}
