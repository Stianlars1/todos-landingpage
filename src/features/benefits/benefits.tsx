import { TaskBuddyCheckmark } from "@/assets/taskBuddyCheckmark/taskBuddyCheckmark";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { SectionWrapper } from "@/components/sectionWrapper/sectionWrapper";
import { EasyReveal, RevealProps } from "@/components/ui/reveal/reveal";
import { Inter as inter, Libre_Franklin } from "next/font/google";
import Image from "next/image";
import { Benefit, benefitsContentList } from "./content";
import styles from "./css/benefits.module.css";

const Libre = Libre_Franklin({ subsets: ["latin"] });
const Inter = inter({ subsets: ["latin"] });
export const Benefits = () => {
  const feature = "Key benefits";
  const title = "Unlock Your Potential with TaskBuddy";
  const description =
    "TaskBuddy offers unique benefits to enhance your productivity and task management experience.";
  return (
    <SectionWrapper>
      <SectionHeader
        feature={feature}
        title={title}
        description={description}
      />

      <BenefitsContent />
    </SectionWrapper>
  );
};

const BenefitsContent = () => {
  return (
    <div className={`${styles.content} ${Libre.className}`}>
      <ul className={styles.benefitList}>
        {benefitsContentList.map((benefit: Benefit, index) => (
          <BenefitItem key={benefit.title} benefit={benefit} index={index} />
        ))}
      </ul>
    </div>
  );
};

const BenefitItem = ({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) => {
  const customClass = getCustomClass(index);

  const revealProps = getRevealProps(index);
  const isAnimated = benefit.animated;
  const showBulletPoints =
    benefit.bulletPoints && benefit.bulletPoints.length > 0;
  const Animation = isAnimated && benefit.animation ? benefit.animation : null;
  const imageSource = !isAnimated && benefit.imgSrc ? benefit.imgSrc : null;

  return (
    <>
      <EasyReveal
        width="100%"
        margin={"0px 0px 50px 0px"}
        threshold={0.1}
        className={`${styles.benefitItem} ${customClass}`}
        {...revealProps}
      >
        <li>
          <div className={styles.itemHeader}>
            <h2 className={Inter.className}>{benefit.title}</h2>
            <p className={Inter.className}> {benefit.description}</p>
          </div>

          {showBulletPoints && (
            <>
              <ul className={styles.bulletPointsList}>
                {benefit.bulletPoints?.map((point) => (
                  <li
                    key={point}
                    className={`${styles.bulletPoint} ${Inter.className}`}
                  >
                    <TaskBuddyCheckmark />
                    {point}
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className={styles.itemContent}>
            {Animation && (
              <>
                <div className={styles.animationWrapper}>
                  {
                    <Animation
                      className={`${styles.animation} ${
                        index === 1 ? styles.boostAnimation : undefined
                      }`}
                    />
                  }
                </div>
              </>
            )}

            {imageSource && (
              <>
                <Image
                  alt={`Benefit item ${benefit.title}`}
                  src={imageSource}
                  width={0}
                  height={0}
                  sizes="auto"
                  loading="eager"
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </>
            )}
          </div>
        </li>
      </EasyReveal>
    </>
  );
};

const getRevealProps = (index: number): RevealProps => {
  // props i will use:
  // type : MotionProps;
  // where type MotionProps = "down" | "up" | "left" | "right" | "opacity";

  switch (index) {
    case 0:
      return { type: "right", reset: true };
    case 1:
      return { type: "left", reset: true };
    case 2:
      return { type: "up", reset: true };
    case 3:
      return { type: "left", reset: true };
    case 4:
      return { type: "up", reset: true };
    case 5:
      return { type: "left", reset: true };
    case 6:
      return { type: "right", reset: true };
    default:
      return { type: "left", reset: true };
  }
};

const getCustomClass = (index: number) => {
  switch (index) {
    case 0:
      return styles.item0;
    case 1:
      return styles.item1;
    case 2:
      return styles.item2;
    case 3:
      return styles.item3;
    case 4:
      return styles.item4;
    case 5:
      return styles.item5;
    case 6:
      return styles.item6;
    default:
      return styles.item0;
  }
};
