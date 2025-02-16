import { Header } from "../components/Header/Header";
import styles from "./Home.module.css";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.banner_container}>
        <img src="/banner.jpg" alt="banner" />
        <p className={styles.title}>طلا بخر کیلو کیلو!</p>
        <div className={styles.button}>خرید کیلویی</div>
      </div>
      <h2 className={styles.heading}>ما اصلا خالی فروشی نمی‌کنیم!</h2>
      <h5 className={styles.body}>
        یعنی اصلا از بچگی به ما یاد دادن خالی نبندیم، برا همین کلی پشتوانه‌ی طلا
        داریم، می‌گی نه؟ بیا بهت نشون بدم. عه؟؟ زرنگی؟ می‌خواستی جای طلا ها رو
        بهت بگم؟‌هه.
      </h5>
    </div>
  );
};
