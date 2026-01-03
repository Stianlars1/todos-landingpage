import { Reveal } from "@/components/ui/reveal/reveal";
import { Button } from "@stianlarsen/react-ui-kit";
import { FeaturesContentMap } from "../../content";
import styles from "./css/features.module.css";
export const Features = ({
  toggleExamples,
}: {
  toggleExamples: () => void;
}) => {
  return (
    <>
      <Reveal duration={0.5} type="opacity" width="fit-content">
        <Button variant="primary" onClick={toggleExamples}>
          Show examples
        </Button>
      </Reveal>
      <FeaturesContent />
    </>
  );
};

const FeaturesContent = () => {
  return (
    <div className={styles.featuresContent}>
      <ul className={styles.featuresList}>
        {FeaturesContentMap.map((feature, index) => {
          const { Icon, feature: title, description } = feature;
          return (
            <Reveal
              key={title}
              delay={index * 0.2}
              duration={0.5}
              type="opacity"
              width="100%"
            >
              <li className={styles.featureItem}>
                <h3 className={styles.featureItemTitle}>
                  <Icon size={20} className={styles.customIcon} />

                  {title}
                </h3>
                <p className={styles.featureItemDescription}>{description}</p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
};
