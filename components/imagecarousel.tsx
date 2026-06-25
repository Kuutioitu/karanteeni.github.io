import { useState } from "react";
import styles from "../styles/imagecarousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export interface ImageData {
  src: string,
  alt: string,
  description: string
}

const ImageCarouselSection = ({ images }: { images: ImageData[] }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const current = images[index];

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <div className={styles.imageWrapper}>
          <img src={current.src} alt={current.alt} className={styles.image} />
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className={`${styles.carouselButton} ${styles.leftButton}`}
            >
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </button>

            <button
              type="button"
              onClick={next}
              className={`${styles.carouselButton} ${styles.rightButton}`}
            >
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </>
        )}
      </div>

      <div className={styles.meta}>
        <div className={styles.description}>{current.description}</div>
      </div>
    </div>
  );
};

export default ImageCarouselSection;
