"use client";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

export type CardProps = {
  imageSrc: string;
  topLeftText?: string;
  topRightText?: string;
  link: string;
  linkText: string;
  productTitle: string;
  price: string;
  rate: string;
};

export const Card: React.FC<CardProps> = ({
  imageSrc,
  topLeftText,
  topRightText,
  link,
  linkText,
  productTitle,
  price,
  rate,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        {topLeftText && <div className={styles.topLeft}>{topLeftText}</div>}
        {topRightText && <div className={styles.topRight}>{topRightText}</div>}
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt="Card Image"
            className={styles.image}
            width={100}
            height={100}
          />
        </div>
        <a href={link} className={styles.link}>
          <span id="linktext" style={{ padding: "3px"}}>
            {" "}
            {linkText}
          </span>
          <span id="heart" style={{ backgroundColor: "gray", padding: "3px" }}>
            con
          </span>
        </a>
      </div>
      <div className={styles.productContainer}>
        <h5>{productTitle}</h5>
          <Image
            src={rate}
            alt="Card rate"
            className={styles.rate}
            width={0}
            height={0}
          />
        <p>${price}</p>
      </div>
      <div>
        <p className={styles.addToCart}>ADD TO CART</p>
      </div>
    </div>
  );
};
