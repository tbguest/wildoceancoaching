import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";
import { imageLoader } from "../../prismicio";
import styles from "./RetreatCards.module.css";

const RetreatCards = ({ slice }) => {
  return (
    <section className={styles.grid}>
      {slice.items.map((item) => (
        <div className={styles.card} key={item.title}>
          <div className={styles.image_wrapper}>
            <Image
              loader={imageLoader}
              width={250}
              height={250}
              layout="responsive"
              src={item.image.url}
              alt={item.image.alt}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            <PrismicRichText field={item.description} />
            <span className={styles.link}>
              <Link href={`/retreats/${item.link.uid}`}>
                <a>
                  Details
                  <TiArrowRight className={styles.icon} />
                </a>
              </Link>
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RetreatCards;
