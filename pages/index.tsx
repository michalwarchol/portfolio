import type { NextPage } from "next";
import Head from "next/head";
import Content from "../src/components/Content/Content";
import Header from "../src/components/Header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Michał Warchoł</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Content />
    </div>
  );
};

export default Home;
