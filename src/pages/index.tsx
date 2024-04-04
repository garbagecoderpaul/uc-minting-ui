import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Ukraine Confidential</title>
        <meta
          name="description"
          content="Ukraine Confidential"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
