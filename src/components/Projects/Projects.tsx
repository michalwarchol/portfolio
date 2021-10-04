import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import Divider from "../Divider/Divider";
import Project from "../Project/Project";
import styles from "./Projects.module.scss";

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.glass}>
        <div className={styles.navbar}>
          <div className={styles.logo}>Projects</div>
        </div>
        <Divider />
        <Project
          title="Clonebook"
          image="/clonebook.png"
          BgIcon={FaThumbsUp}
          featuresStack={[
            "posts",
            "friends",
            "reactions",
            "comments",
            "stories",
          ]}
          frontendStack={[
            "React",
            "Next.js",
            "TypeScript",
            "Chakra UI",
            "Urql",
          ]}
          backendStack={[
            "Node.js",
            "Express",
            "AWS S3",
            "typeorm",
            "type-graphql",
            "Apollo Server",
            "PostgreSQL"
          ]}
        />
      </div>
    </div>
  );
};
export default Projects;
