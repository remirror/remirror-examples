import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { Suspense, useCallback, useState } from "react";

const Editor = dynamic(() => import("../components/editor"), {
  loading: () => <p>Loading editor...</p>,
  ssr: false,
});

const STORAGE_KEY = "remirror-editor-content";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a>
          {" & "}
          <a href="https://remirror.io" className={styles.remirror}>
            Remirror
          </a>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>components/editor.tsx</code>
        </p>
        <Editor />
      </main>
    </div>
  );
};

export default Home;
