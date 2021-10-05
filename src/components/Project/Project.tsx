import React, { useEffect, useState } from "react";
import styles from "./Project.module.scss";
import Image from "next/image";
import { IconType } from "react-icons";
import List from "../List/List";
import { BsDot } from "react-icons/bs";
import { AiFillFire, AiFillGithub } from "react-icons/ai";

interface Props {
  title: string;
  image: string;
  BgIcon: IconType;
  featuresStack?: string[];
  frontendStack?: string[];
  backendStack?: string[];
}

const Project: React.FC<Props> = ({
  title,
  image,
  BgIcon,
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
              <p>
                Clonebook is a copy of facebook. I mean, not identical, but it
                has close design and lots of features like creating posts or
                adding friends. By making this project, I learned how to use
                GraphQL with URQL client, how to manage PostgreSQL using typeorm
                and how to upload images to AWS S3 bucket.
              </p>
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
                <div className={styles.linkButton}>
                  <AiFillFire />
                </div>
                <div className={styles.linkButton}>
                  <AiFillGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.article}>
          <List title="Features">
            {featuresStack?.map((elem, index) => (
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
