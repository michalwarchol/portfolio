import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menuButtonsVisible, setMenuButtonsVisible] = useState<
    "visible" | "hidden"
  >("hidden");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    //mouse event detect click outside menu
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  //setting visibility:hidden when an animation is finished (after 0.4s)
  useEffect(() => {
    if (!menuOpen) {
      setTimeout(() => {
        setMenuButtonsVisible("hidden");
      }, 400);
      return;
    }
    setMenuButtonsVisible("visible");
  }, [menuOpen]);

  return (
    <div className={styles.navbar} ref={navbarRef} id="header">
      <div
        className={styles.logo}
        style={{
          opacity: menuOpen ? 0 : 1,
          transform: menuOpen ? "translateX(-100px)" : undefined,
        }}
      >
        Michał Warchoł
      </div>
      <div className={styles.buttons}>
        <Link to="projects" smooth={true}>
          <div className={styles.navbarButton}>Projects</div>
        </Link>
        <Link to="hireMe" smooth={true}>
          <div className={styles.navbarButton}>Hire Me</div>
        </Link>
      </div>
      <div className={styles.menu} style={{ right: menuOpen ? "96%" : 0 }}>
        <div
          className={styles.menuIndicator}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          style={{
            transform: menuOpen ? "rotate(-90deg)" : "rotate(0deg)",
          }}
        >
          <FiMenu />
        </div>
      </div>

      <div
        className={styles.menuButtons}
        style={{
          opacity: menuOpen ? 1 : 0,
          visibility: menuButtonsVisible,
          transform: menuOpen ? undefined : "translateX(300px)",
        }}
      >
        <Link to="projects" smooth={true}>
          <div className={styles.navbarButton}>Projects</div>
        </Link>
        <Link to="hireMe" smooth={true}>
          <div className={styles.navbarButton}>Hire Me</div>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
