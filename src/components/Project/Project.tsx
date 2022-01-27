import React, { useEffect, useState } from "react";
import styles from "./Project.module.scss";
import Image from "next/image";
import { IconType } from "react-icons";
import List from "../List/List";
import { BsDot } from "react-icons/bs";
import { AiFillFire, AiFillGithub } from "react-icons/ai";
import Button from "../Button/Button";

interface Props {
  title: string;
  text: string;
  image: string;
  BgIcon: IconType;
  link: string;
  github: string;
  featuresStack?: string[];
  frontendStack?: string[];
  backendStack?: string[];
}

const Project: React.FC<Props> = ({
  title,
  text,
  image,
  BgIcon,
  link,
  github,
  featuresStack,
  frontendStack,
  backendStack,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  let width = 740;
  let height = 380;
  if (windowWidth < 768) {
    width = 320;
    height = 150;
  }
  return (
    <div className={styles.project}>
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.descriptionInner}>
            <div className={styles.title}>
              <span>{title}</span>
            </div>
            <div className={styles.titleText}>
              <p>{text}</p>
            </div>
            <div className={styles.linkButtons}>
              <Button
                Icon={AiFillFire}
                text="Live"
                type="fill"
                onClick={() => window.location.assign(link)}
              />
              <Button
                Icon={AiFillGithub}
                text="Repo"
                type="outline"
                onClick={() => window.location.assign(github)}
              />
            </div>
            <div className={styles.bgIcon}>
              <BgIcon />
            </div>
          </div>
        </div>
        <div className={styles.graphics}>
          <div className={styles.imageBox}>
            <div className={styles.innerBox}>
              <Image src={image} width={width} height={height} />
              <div className={styles.linkButtons}>
                <div
                  className={styles.linkButton}
                  onClick={() => window.location.assign(link)}
                >
                  <AiFillFire />
                </div>
                <div
                  className={styles.linkButton}
                  onClick={() => window.location.assign(github)}
                >
                  <AiFillGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerArticle}>
        <div className={styles.article}>
          <List title="Features">
            {featuresStack?.map((elem, index) => (
              <div key={index} className={styles.list}>
                <p className={styles.elem}>
                  <span>
                    <BsDot />
                  </span>
                  {elem}
                </p>
              </div>
            ))}
          </List>
        </div>
        <div className={styles.article}>
          <List title="Frontend">
            {frontendStack?.map((elem, index) => (
              <div key={index} className={styles.list}>
                <p>
                  <span>
                    <BsDot />
                  </span>
                  {elem}
                </p>
              </div>
            ))}
          </List>
        </div>
        <div className={styles.article}>
          <List title="Backend">
            {backendStack?.map((elem, index) => (
              <div key={index} className={styles.list}>
                <p>
                  <span>
                    <BsDot />
                  </span>
                  {elem}
                </p>
              </div>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Project;
