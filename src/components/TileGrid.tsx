import styles from "./TileGrid.module.css";
import Image from "next/image";

const TileGrid = () => {
  const tiles = [
    { name: "Porcelain Slab", image: "/images/hero.png", size: "colSpan1" },
    { name: "GVT / PGVT Tiles", image: "/images/floor.png", size: "colSpan1" },
    { name: "Digital Wall Tiles", image: "/images/kitchen.png", size: "colSpan1" },
    { name: "Nano/Digital Vitrified Tiles", image: "/images/bathroom.png", size: "colSpan2" },
    { name: "Double Charge Vitrified Tiles", image: "/images/showroom.png", size: "colSpan1" },
  ];

  return (
    <section id="gallery" className={styles.tileGrid}>
      <div className="container">
        <div className={styles.gridContainer}>
          {tiles.map((tile, i) => (
            <div key={i} className={`${styles.tileItem} ${styles[tile.size]}`}>
              <Image src={tile.image} alt={tile.name} fill className={styles.image} />
              <div className={styles.overlay}>
                <h4>{tile.name}</h4>
                <div className={styles.divider}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TileGrid;
