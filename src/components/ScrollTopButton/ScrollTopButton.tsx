import React, { useState } from "react";
import styles from "./ScrollTopButton.module.scss";
import { Link } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect } from "react";

const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const observeHeader = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const header = document.getElementById("header");
    const observer = new IntersectionObserver(observeHeader);
    if (header) {
      observer.observe(header);
    }

    return () => {
      if (header) {
        observer.unobserve(header);
      }
    };
  }, []);

  return (
    <Link to="header" smooth={true} offset={-70}>
      <div
        className={styles.scrollTopButton}
        style={{ display: isVisible ? "none" : undefined }}
      >
        <IoIosArrowUp />
      </div>
    </Link>
  );
};
export default ScrollTopButton;
