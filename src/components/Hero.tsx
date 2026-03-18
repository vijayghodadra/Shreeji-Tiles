import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <h1 className="fade-in">Where Style Meets <br /> Durability</h1>
          <p className={`${styles.subtitle} fade-in`} style={{ animationDelay: "0.2s" }}>
            Discover a World of Tiles, Sanitaryware & Bath Fittings
          </p>
          <div className={`${styles.ctaContainer} fade-in`} style={{ animationDelay: "0.4s" }}>
            <p className={styles.transformText}>Transform Your Kitchen with Luxury Tiles</p>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}></div>
      </div>
    </section>
  );
};

export default Hero;
