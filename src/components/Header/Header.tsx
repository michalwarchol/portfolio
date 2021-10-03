import React, { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaGrinStars } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";
import Divider from "../Divider/Divider";

const Header: React.FC = () => {
  const exploreRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (exploreRef.current && githubRef.current) {
      VanillaTilt.init([exploreRef.current, githubRef.current], {
        "max-glare": 0.8,
        glare: true,
      });
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.glass}>
        <div className={styles.navbar}>
          <div className={styles.logo}>Michał Warchoł</div>
          <div className={styles.buttons}>
            <div className={styles.navbarButton}>Projects</div>
            <div className={styles.navbarButton}>TechStack</div>
            <div className={styles.navbarButton}>About Me</div>
          </div>
        </div>
        <Divider />
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.colorText}>All You're Gonna See Here Is</p>
            <p className={styles.whiteText}>Great code</p>
            <p className={styles.whiteText}>from a great dev</p>
            <div className={styles.linkButtons}>
              <div className={styles.exploreButton} ref={exploreRef}>
                <span>Explore</span>
                <div className={styles.arrow}>
                  <MdKeyboardArrowRight />
                </div>
              </div>
              <div className={styles.githubButton} ref={githubRef}>
                <span>Github</span>
                <div>
                  <div className={styles.arrow}>
                    <AiFillGithub />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.icon}>
              <FaGrinStars />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
