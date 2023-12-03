import styles from "./index.module.sass";

export default function Steps() {
  return (
    <div className={styles.carSelection}>
      <div className={styles.carSelection__steps}>
        <div className={styles.carSelection__active}>Avtomobil tanlash</div>
        <span className={styles.carSelection__spanNotActive}></span>
        <div className={styles.carSelection__notActive}>Joy tanlash</div>
        <span className={styles.carSelection__spanNotActive}></span>
        <div className={styles.carSelection__notActive}>Tasdiqlash</div>
      </div>
    </div>
  );
}
