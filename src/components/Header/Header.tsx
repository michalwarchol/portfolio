import React, { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaGrinStars } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";
import Divider from "../Divider/Divider";
import { Link } from "react-scroll";
import Navbar from "../Navbar/Navbar";

const Header: React.FC = () => {
  const exploreRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (exploreRef.current && githubRef.current) {
      exploreRef.current.scrollIntoView();
      VanillaTilt.init([exploreRef.current, githubRef.current], {
        "max-glare": 0.8,
        glare: true,
      });
    }
  }, [exploreRef, githubRef]);

  return (
    <header className={styles.header}>
      <div className={styles.glass}>
        <Navbar />
        <Divider />
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.colorText}>All You're Gonna See Here Is</p>
            <p className={styles.whiteText}>Great code</p>
            <p className={styles.whiteText}>from a great dev</p>
            <div className={styles.linkButtons}>
              <Link to="projects" smooth={true}>
                <div className={styles.exploreButton} ref={exploreRef}>
                  <span>Explore</span>
                  <div className={styles.arrow}>
                    <MdKeyboardArrowRight />
                  </div>
                </div>
              </Link>
              <div
                className={styles.githubButton}
                ref={githubRef}
                onClick={() =>
                  window.location.assign("https://github.com/michalwarchol")
                }
              >
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
