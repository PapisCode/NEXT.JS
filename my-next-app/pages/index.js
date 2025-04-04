import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { Suspense, lazy } from 'react';
import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import ConditionalRendering from '../components/ConditionalRendering';
import FormSubmission from '../components/FormSubmission';
import ToggleVisibility from '../components/ToggleVisibility';
import Counter from "../components/Counter";
import ItemList from "../components/ItemList";
import TabGroup from "../components/TabGroup";

const HeavyDetails = lazy(() => import('../components/HeavyDetails'));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
        <Header />
          <MainContent 
            title="About React" 
            content="React is a JavaScript library for building user interfaces." 
          />
          <MainContent 
            title="Why Learn React?" 
            content="React makes it painless to create interactive UIs and is widely used in the industry." 
          />
          
          <div>
          <ConditionalRendering />
          <FormSubmission />
          <ToggleVisibility />
          <Counter />
          <ItemList />
          </div>

          /*Lab 10 content below */
          <section style={{marginTop: '40px'}}>
            <h2>Lab 10: TabGroup + Dynamic Import</h2>
            <TabGroup>
              <TabGroup.Tab index={0}>Intro</TabGroup.Tab>
              <TabGroup.Tab index={1}>Dynamic</TabGroup.Tab>
              <TabGroup.Tab index={2}>Final</TabGroup.Tab>

              <TabGroup.TabPanel index={0}>
                Welcome to the TabGroup component!
              </TabGroup.TabPanel>
              <TabGroup.TabPanel index={1}>
                <Suspense fallback={<p>Loading Heavy Component...</p>}>
                <HeavyDetails />
                </Suspense>
              </TabGroup.TabPanel>
              <TabGroup.TabPanel index={2}>
                Congrats! You've reached the final tab!
              </TabGroup.TabPanel>
            </TabGroup>
          </section>
          

          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Get started by editing <code>pages/index.js</code>.
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
