import Head from "next/head";
import Layout from "@/components/Layout";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <Layout />
        <HomePage />
      </main>
    </>
  );
}
