"use client";
import React from "react";
import styles from "./index.module.css";

type BannerType =
  | "fullWidthImage"
  | "fullWidthNoImage"
  | "fullHeightImage"
  | "halfWidthImage";

export interface HeaderBannerProps {
  type: BannerType;
  backgroundImage?: string;
  title: string;
  subtitle?: string;
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({
  type,
  backgroundImage,
  title,
  subtitle,
}) => {
  const getClassName = () => {
    switch (type) {
      case "fullWidthImage":
        return styles.fullWidthImage;
      case "fullWidthNoImage":
        return styles.fullWidthNoImage;
      case "fullHeightImage":
        return styles.fullHeightImage;
      case "halfWidthImage":
        return styles.halfWidthImage;
      default:
        return "";
    }
  };

  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div
      className={`${styles.banner} ${getClassName()}`}
      style={backgroundStyle}
      role="banner"
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default HeaderBanner;
