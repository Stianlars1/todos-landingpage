"use client";
import { DotPattern } from "@/components/dotPattern/dotPattern";
import { SectionWrapper } from "@/components/sectionWrapper/sectionWrapper";
import { Reveal } from "@/components/ui/reveal/reveal";
import { useIsDarkmodeActive } from "@/hooks/useIsDarkmode";
import { BorderBeam } from "@stianlarsen/border-beam";
import { Meteors } from "@stianlarsen/meteors";
import { FadedWords } from "@stianlarsen/react-fade-effects";
import { Libre_Franklin } from "next/font/google";
import Image from "next/image";
import styles from "./css/dashboardShowcase.module.css";
import {
  CREATE_DASHBOARDS,
  dashboardFeatureCards,
  SEARCH,
  SHORTCUTS,
} from "./dashboardShowcaseContent";
const libre = Libre_Franklin({ subsets: ["latin"] });
export const DashboardShowcase = () => {
  return (
    <SectionWrapper className={styles.sectionWrapper}>
      <div className={styles.extraFeatures}>
        <DashboardShowcaseHeader />
        <Reveal
          delay={0.15}
          threshold={0.2}
          type="opacity"
          duration={1}
          width="100%"
        >
          <DashboardShowcaseContent />
        </Reveal>
      </div>
    </SectionWrapper>
  );
};

const DashboardShowcaseHeader = () => {
  const keyTag = "Organize Your Tasks";
  const title = "Core Tools for Effortless Task Management";
  const description =
    "Explore TaskBuddy’s core features, designed to simplify your workflow. From creating dashboards to using powerful shortcuts, these tools help you stay organized and efficient.";

  return (
    <>
      <header className={`${styles.header} ${libre.className}`}>
        <h2 className={styles.title}>
          <FadedWords variant="up" words={title} />
        </h2>
        <div className={styles.description}>
          <FadedWords
            variant="up"
            words={description}
            duration={1}
            staggerTime={0.025}
            delay={500}
          />
        </div>
      </header>
    </>
  );
};

const DashboardShowcaseContent = () => {
  const { isDarkmodeActive: isDarkmode } = useIsDarkmodeActive();
  return (
    <>
      <Reveal
        type="opacity"
        width="100%"
        threshold={0.15}
        margin={undefined}
        duration={1}
        delay={0.5}
      >
        <div className={styles.content}>
          <ul>
            {dashboardFeatureCards.map((card, index) => {
              const className =
                index === 0
                  ? styles.card1
                  : index === 1
                  ? styles.card2
                  : index === 2
                  ? styles.card3
                  : index === 3
                  ? styles.card4
                  : "";
              const isKeyboard = card.title === SHORTCUTS;
              const isCreateDashboards = card.title === CREATE_DASHBOARDS;
              const isSearch = card.title === SEARCH;

              return (
                <div
                  className={`${styles.card} ${className} ${
                    isKeyboard ? styles.keyboardCard : ""
                  }`}
                  key={card.id}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={
                        isDarkmode
                          ? card.imageUrlDark
                            ? card.imageUrlDark
                            : card.imageUrl
                          : card.imageUrl
                      }
                      alt="Dashboard Showcase"
                      aria-hidden
                      width={0}
                      height={0}
                      loading="eager"
                      priority
                      fetchPriority="high"
                      unoptimized
                      className={styles.image}
                    />
                  </div>
                  <h3 className={libre.className}>{card.title}</h3>

                  <p className={libre.className}>{card.description}</p>
                  {isCreateDashboards && (
                    <Meteors
                      speed={2}
                      size={50}
                      amount={15}
                      fallingSide="right"
                    />
                  )}

                  {isSearch && (
                    <>
                      <BorderBeam
                        colorFrom={"hsl(var(--background))"}
                        colorTo={
                          isDarkmode
                            ? "hsl(var(--foreground))"
                            : "hsl(var(--primary))"
                        }
                        size={100}
                        anchor={90}
                        borderWidth={isDarkmode ? 1 : 2}
                        duration={10}
                      />

                      <DotPattern className={styles.dotPatterns} />
                    </>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </>
  );
};
