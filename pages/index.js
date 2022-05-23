import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zenovia Ursuliak</title>
        <meta name="Coaching site" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <div className={styles.splash_container}>
          <div className={styles.action_items}>
            <p className={styles.text}>Book a retreat</p>
            <button>Browse programs</button>
          </div>
        </div>
        <div className={styles.content_container}>
          <div className={styles.content}>
            <p>
              Aliquip non do laborum laboris aute aliquip enim et exercitation
              reprehenderit. Id anim pariatur irure exercitation aliqua ipsum
              irure laborum. Duis irure do nulla sint id Lorem cillum. Proident
              sint qui irure mollit nostrud ad ullamco consequat sunt qui.
              Occaecat aute nostrud incididunt sunt cillum ipsum. Sunt fugiat in
              laborum dolor Lorem do reprehenderit ullamco nulla exercitation.
            </p>

            <p>
              In aute eiusmod duis ea mollit amet excepteur magna. Quis amet
              consequat veniam officia elit. Dolor nisi incididunt mollit Lorem.
              Minim duis id aliqua sit ipsum do ea et in sunt deserunt
              reprehenderit. Minim nostrud non elit non cillum labore. Laboris
              nulla pariatur amet ex. Excepteur duis quis occaecat cillum.
            </p>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
