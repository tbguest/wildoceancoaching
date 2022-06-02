import styles from "./Splash.module.css";
import Link from "next/link";

const Splash = () => {
  return (
    <div className={styles.container}>
      <div className={styles.action_items}>
        <p className={styles.quote}>
          “When the basis for your actions is inner alignment with the present
          moment, your actions become empowered by the intelligence of life
          itself.” — Eckhart Tolle
        </p>
        <Link href={"/retreats"}>
          <button>
            <a>Explore retreats</a>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Splash;