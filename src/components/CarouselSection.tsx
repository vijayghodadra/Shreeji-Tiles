"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import styles from "./CarouselSection.module.css";

const CarouselSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const collections = [
    { title: "MarbleX", image: "/images/bathroom.png" },
    { title: "Denver Gold & Rose Gold Series", image: "/images/faucets.png" },
    { title: "Premium Kitchen Collection", image: "/images/kitchen.png" },
    { title: "Digital Wall Masterpieces", image: "/images/showroom.png" },
    { title: "Porcelain Slab Excellence", image: "/images/hero.png" },
  ];

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    
    // Calculate active index for dots
    const currentIndex = Math.round(scrollLeft / (clientWidth / 3)); 
    setActiveIndex(Math.min(currentIndex, collections.length - 3));
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    
    // Scroll by one card width approximately
    const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className={styles.carouselSection}>
      <div className="container">
        <div className={styles.header}>
          <h2>ADD A MARVELOUS</h2>
          <p>TOUCH TO YOUR SPACE</p>
        </div>

        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navButton} ${styles.left}`} 
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className={styles.carousel} ref={containerRef} onScroll={handleScroll}>
            {collections.map((item, i) => (
              <div key={i} className={styles.card}>
                <Image src={item.image} alt={item.title} fill className={styles.image} />
                <div className={styles.badge}>EXPLORE</div>
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className={`${styles.navButton} ${styles.right}`} 
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.dots}>
          {[0, 1, 2].map(i => (
            <span 
              key={i} 
              className={`${styles.dot} ${activeIndex === i ? styles.activeDot : ""}`} 
            />
          ))}
        </div>

        <div className={styles.btnWrapper}>
          <button className={styles.viewAllBtn}>
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
