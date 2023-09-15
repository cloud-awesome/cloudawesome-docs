import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'dataverse-simulate',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    href: 'dataverse-simulate/intro',
    description: (
      <>
          Mock framework to simulate Dataverse (Power Platform/Dynamics 365 CE) environments for unit testing
      </>
    ),
  },
  {
    title: 'markdown-maker',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    href: 'markdown-maker/intro',
    description: (
      <>
          Lightweight library to assist creation of .md files (in GitHub, Docusaurus, and DocFx styles)
      </>
    ),
  },
  {
    title: 'cds-customisation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    href: 'cds-customisation/intro',
    description: (
      <>
          Automate common customisation and configuration tasks such as entity creation, plugin registration, and migrating non-solution aware components
      </>
    ),
  },
];

function Feature({title, Svg, href, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={href}><h3>{title}</h3></Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
