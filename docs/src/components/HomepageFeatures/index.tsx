import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FeatureItem, featureList } from './utils';

function Feature({ title, source, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={source} className={styles.featureImage} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ColumnRowBreak({ index }: { index: number }) {
  return index !== 0 && index % 3 === 0 ? (
    <div className={`col col--12 ${styles.rowBreak}`} />
  ) : null;
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props, idx) => (
            <>
              <ColumnRowBreak index={idx} />
              <Feature key={idx} {...props} />
            </>
          ))}
          {}
        </div>
      </div>
    </section>
  );
}
