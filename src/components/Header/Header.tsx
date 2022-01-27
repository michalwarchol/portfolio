import React from "react";
import styles from "./Header.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaGrinStars } from "react-icons/fa";
import Divider from "../Divider/Divider";
import { Link } from "react-scroll";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

const Header: React.FC = () => {
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
                <Button
                  Icon={MdKeyboardArrowRight}
                  text="Explore"
                  type="fill"
                />
              </Link>
              <Button
                Icon={AiFillGithub}
                text="Github"
                type="outline"
                onClick={() =>
                  window.location.assign("https://github.com/michalwarchol")
                }
              />
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
