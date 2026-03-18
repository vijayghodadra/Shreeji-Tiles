import Image from "next/image";
import styles from "./About.module.css";
import { Milestone, Users, Trophy, ShieldCheck } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Milestone />, label: "25+ Years Experience", desc: "Decades of expertise in tiles and interior solutions" },
    { icon: <Users />, label: "9000+ Happy Customers", desc: "Trusted by thousands of families and professionals" },
    { icon: <Trophy />, label: "Premium Quality", desc: "Curated collection from world-class manufacturers" },
    { icon: <ShieldCheck />, label: "Quality Assurance", desc: "Guaranteed durability and after-sales support" },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.tagline}>Est. Since 2000</span>
            <h2 className={styles.title}>About Shreeji Tiles</h2>
            <p className={styles.description}>
              Since our inception, Shreeji Tiles has been the trusted destination for premium tiles, 
              sanitaryware, and bath fittings. We pride ourselves on offering an extensive collection 
              that combines aesthetic excellence with functional durability.
            </p>
            <p className={styles.description}>
              Our experienced team provides personalized consultation to help you transform your 
              vision into reality, whether it’s a modern kitchen, luxurious bathroom, or elegant living space.
            </p>

            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <div key={i} className={styles.statItem}>
                  <div className={styles.iconWrapper}>{stat.icon}</div>
                  <div>
                    <h4>{stat.label}</h4>
                    <p>{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.imageOverlay}></div>
            <Image 
              src="/images/showroom.png" 
              alt="Shreeji Tiles Showroom" 
              width={600} 
              height={700}
              className={styles.image}
            />
            <div className={styles.floatingBadge}>
              <h3>9000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
