import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import Divider from "../Divider/Divider";
import Project from "../Project/Project";
import styles from "./Projects.module.scss";
import { Element } from "react-scroll";

const Projects: React.FC = () => {
  return (
    <Element name="projects">
      <div className={styles.projects}>
        <div className={styles.glass}>
          <div className={styles.navbar}>
            <div className={styles.logo}>Projects</div>
          </div>
          <Divider />
          <Project
            title="Clonebook"
            text="Clonebook is a copy of facebook. I mean, not identical, but it
          has close design and lots of features like creating posts or
          adding friends. By making this project, I learned how to use
          GraphQL with URQL client, how to manage PostgreSQL using typeorm
          and how to upload images to AWS S3 bucket."
            image="/clonebook.png"
            BgIcon={FaThumbsUp}
            link="https://clone-book.com"
            github="https://github.com/michalwarchol/fb-clone-frontend"
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
              "GraphQL",
              "Apollo Server",
              "PostgreSQL",
            ]}
          />
          <Divider />
          <Project
            title="MessageDrop"
            text="MessageDrop is a platform to chat on. You can create your room and add 
          friends. In this project I learned how to use graphql subscriptions. It was 
          essential to create live chat. I used MongoDB in this project to feel the 
          difference between SQL and No-SQL database. Both are great, but I prefer Mongo :)"
            BgIcon={BsFillChatDotsFill}
            image="/messagedrop.png"
            link="https://message-drop.com"
            github="https://github.com/michalwarchol/MessageDrop"
            featuresStack={[
              "chat room creation",
              "chat user hierarchy",
              "images and files in messages",
              "invite requests",
              "chat room settings",
              "account verification via email and SMS",
            ]}
            frontendStack={[
              "React",
              "Next.js",
              "TypeScript",
              "Apollo Client",
              "Sass",
            ]}
            backendStack={[
              "Node.js",
              "Express",
              "AWS S3",
              "MongoDB / typegoose",
              "Redis",
              "GraphQL",
              "Apollo",
              "Twilio",
            ]}
          />
        </div>
      </div>
    </Element>
  );
};
export default Projects;
