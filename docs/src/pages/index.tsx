import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={`row ${styles.wrapper}`}>
          <div>
            <img src="img/logo-negative.png" className={styles.logo} />
          </div>
          <div className={styles.rowGap}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">
              Zero dependency, Lightweight, Extensible.
              <br />A Multipurpose TypeScript library
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div className={styles.buttonsWrapper}>
        <div className={styles.buttons}>
          <Link
            to="/docs/guides/getting-started"
            className={`button button--secondary button--lg ${styles.buttonCustom}`}
          >
            Get started
          </Link>
          <Link
            to="https://github.com/jaflesch/ts-pokeapi"
            className={`button button--secondary button--lg ${styles.buttonCustom}`}
          >
            View on GitHub
          </Link>
        </div>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
