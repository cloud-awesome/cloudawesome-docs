import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: string;
  description: JSX.Element;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'dataverse-simulate',
    Svg: require('@site/static/img/dataverse-simulate.png').default,
    href: 'dataverse-simulate',
    description: (
      <>
          Mock framework to simulate Dataverse (Power Platform/Dynamics 365 CE) environments for unit testing
      </>
    ),
  },
  {
    title: 'markdown-maker',
    Svg: require('@site/static/img/markdown-maker.png').default,
    href: 'markdown-maker',
    description: (
      <>
          Lightweight library to assist creation of .md files (in GitHub, Docusaurus, and DocFx styles)
      </>
    ),
  },
  {
    title: 'cds-customisation',
    Svg: require('@site/static/img/cds-customisation.png').default,
    href: 'cds-customisation',
    description: (
      <>
          Automate common customisation and configuration tasks such as entity creation, plugin registration, and migrating non-solution aware components
      </>
    ),
  },
  {
    title: 'gds-wireframe-stencils',
    Svg: require('@site/static/img/gds-wireframe-stencils.png').default,
    href: 'gds-wireframe-stencils',
    description: (
        <>
          Stencils to create GDS wireframes in Visio, PowerPoint etc. or print out to stick on the wall in a design workshop
        </>
    ),
  },
  {
    title: 'power-portal-gds-accelerator',
    Svg: require('@site/static/img/power-portal-gds-accelerator.png').default,
    href: 'portal-gds-accelerator',
    description: (
        <>
          All the portal configuration records required to set up a new portal using GDS (gov.uk) patterns in Power Pages
        </>
    ),
  },
  {
    title: 'power-portal-test-framework',
    Svg: require('@site/static/img/power-portal-test-framework.png').default,
    href: 'portal-test-framework',
    description: (
        <>
          Basic test framework extending selenium web driver for Power Pages
        </>
    ),
  },
];

function Feature({title, Svg, href, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img" alt="image"/>
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
