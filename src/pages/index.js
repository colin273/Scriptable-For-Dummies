import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Get started in seconds",
    description: <>Open the App and start scripting. That's it!</>,
  },
  {
    title: "Easy to Use",
    description: (
      <>
        Scriptable is an automation tool that enables you to write scripts that
        integrates with native features of iOS such as files, calendars,
        reminders, documents and much more in a very easy way.
      </>
    ),
  },
  {
    title: "Powered by JavaScript",
    description: (
      <>
        Javascript is a very easy and popular language. You'll get the hang of
        it in no time!
      </>
    ),
  },
];

function Feature ({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home () {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      description="Scriptable For Dummies is an easy guide to start with your Scriptable Adventure!"
    >
      <header className={clsx("hero hero--primary header-class", styles.heroBanner)}>
        <div className="container">
          <img
            className="hero-banner-logo margin-vert--md"
            src={useBaseUrl('img/icons/logo_transparant.png')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="badges">
            <a href="https://apps.apple.com/us/app/scriptable/id1405459188" className="margin-vert--md badge">
              <img
                src={useBaseUrl('img/Download_on_the_App_Store.png')}
              />
            </a>
            <a href="https://scriptable.app/mac-beta/" className="margin-vert--md badge">
              <img
                src={useBaseUrl('img/Download_on_the_Mac.png')}
              />
            </a>

          </div>

          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>

          <div className="spacer-height"></div>
          {/* <div class="icon-scroll"></div> */}
        </div>

      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <img
              className="imagescreen"
              src={useBaseUrl('img/screenshot_app.png')}
            />
            <div className="extra-info">
              <div className="columns">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="footer-custom">
          Made with ❤️ by the Scriptable Discord team
      </div>
      </main>

    </Layout>
  );
}

export default Home;
