import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>کیلو‌گلد</div>
      <div>
        <div className={styles.price_container}>
          <span>یه کیلو طلا: </span>
          <span>۲۱۳,۶۸۲,۴۵۷ تومن</span>
        </div>
      </div>
    </div>
  );
};
