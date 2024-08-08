import React from "react";
import styles from "../index.module.css";
import Link from "next/link";

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavLink[];
}

export interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navLinks: NavLink[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  toggleMenu,
  navLinks,
}) => {
  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.mobileburger} onClick={toggleMenu}>
        <span className={styles.burgerText}>{isOpen ? "X" : ""}</span>
      </div>
      <ul className={styles.mobileNavList}>
        {navLinks.map((link, index) => (
          <li key={index} className={styles.mobileNavItem}>
            <Link
              href={link.href}
              onClick={toggleMenu}
              className={styles.mobileNavLink}
            >
              {link.label}
            </Link>
            {link.dropdown && (
              <ul className={styles.mobileDropdown}>
                {link.dropdown.map((sublink, subIndex) => (
                  <li key={subIndex} className={styles.mobileDropdownItem}>
                    <Link href={sublink.href} onClick={toggleMenu}>
                      {sublink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className={styles.mobileNavItem}>
          <Link href="/wishlist" onClick={toggleMenu}>
            Wishlist
          </Link>
        </li>
        <li className={styles.mobileNavItem}>
          <Link href="/cart" onClick={toggleMenu}>
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};
