import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.scss";
import Header from "../src/components/Header/Header";
import Projects from "../src/components/Projects/Projects";

const Home: NextPage = () => {
  return (
    <div className={styles.index}>
      <Head>
        <title>Michał Warchoł</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Projects />
    </div>
  );
};

export default Home;
