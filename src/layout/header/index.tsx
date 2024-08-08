"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./mobilemenue/mobileMenu";

export type NavLink = {
  label: string;
  href: string;
  dropdown?: NavLink[];
};

export type HeaderProps = {
  logoSrc: string;
  navLinks: NavLink[];
};

export const Header: React.FC<HeaderProps> = ({ logoSrc, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.test}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logoSrc} alt="Logo" width={100} height={25} />
            </Link>
          </div>
          <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
            <ul className={styles.navList}>
              {navLinks.map((link, index) => (
                <li key={index} className={styles.navItem}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${isActiveLink(link.href) ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <ul className={styles.dropdown}>
                      {link.dropdown.map((sublink, subIndex) => (
                        <li key={subIndex} className={styles.dropdownItem}>
                          <Link href={sublink.href}>{sublink.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className={styles.icons}>
              <Link href="/wishlist">
                <Image
                  src="/path/to/heart-icon.png"
                  alt="Wishlist"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/cart">
                <Image
                  src="/path/to/cart-icon.png"
                  alt="Cart"
                  width={24}
                  height={24}
                />
              </Link>
            </div>

            <div style={{ display: "flex" }}>
              <div className={styles.MenuDiv}>
                <p>MENU</p>
              </div>
              <div className={styles.burger} onClick={toggleMenu}>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
              </div>
            </div>
          </nav>
        </div>

        {isOpen && (
          <MobileMenu
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            navLinks={navLinks}
          />
        )}
      </div>
    </header>
  );
};
