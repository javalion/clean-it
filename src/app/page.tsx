import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Clean It</h1>
      <p className={styles.subtitle}>Static SPA scaffold ready to build on.</p>
    </main>
  );
}
