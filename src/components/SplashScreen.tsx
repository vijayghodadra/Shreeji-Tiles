"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const startFadeOut = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 400); // 400ms matching updated faster CSS transition
  };

  useEffect(() => {
    // Set splash screen to show for a brief period before fading
    const timer = setTimeout(() => {
      startFadeOut();
    }, 400); // Set to 0.9 seconds as requested

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.splashScreen} ${isFading ? styles.fadeOut : ''}`}>
      <div className={styles.container}>
        <Image
          src="/images/logo.jpeg"
          alt="Shreeji Tiles Logo"
          width={240}
          height={100}
          className={styles.logo}
          priority
        />
      </div>
    </div>
  );
};

export default SplashScreen;
