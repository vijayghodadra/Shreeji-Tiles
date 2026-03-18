"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Stats.module.css";

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / duration, 1);
      // easeOutExpo
      const easing = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easing));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return { count, ref };
};

const StatItem = ({ end, suffix, label }: { end: number, suffix: string, label: string }) => {
  const { count, ref } = useCountUp(end);
  
  // Format numbers > 999 with commas
  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return (
    <div ref={ref} className={styles.statItem}>
      <h2>
        {formattedCount}<span>{suffix}</span>
      </h2>
      <p>{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.grid}>
          <StatItem end={25} suffix="+" label="Years Experience" />
          <StatItem end={8998} suffix="+" label="Happy Customers" />
          <StatItem end={14998} suffix="+" label="Product Varieties" />
          <StatItem end={24} suffix="/7" label="Customer Support" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
