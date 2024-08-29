import { Button } from "@stianlarsen/react-ui-kit";
import Image from "next/image";
import { FeaturesContentMap, FeaturesContentMapType } from "../../content";
import styles from "./css/keyFeatures.module.css";
export const KeyFeatures = ({
  toggleExamples,
}: {
  toggleExamples: () => void;
}) => {
  return (
    <>
      <Button variant="primary" onClick={toggleExamples}>
        Hide examples
      </Button>
      <FeaturesContent />
    </>
  );
};

const FeaturesContent = () => {
  return (
    <div className={styles.featuresContent}>
      <ul className={styles.featuresList}>
        {FeaturesContentMap.map((feature, index) => (
          <FeatureItemLayout
            feature={feature}
            index={index}
            key={feature.imageName}
          />
        ))}
      </ul>
    </div>
  );
};

const FeatureItemLayout = ({
  feature,
  index,
}: {
  feature: FeaturesContentMapType;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const { Icon, feature: title, description, imageName } = feature;
  const imageUrl = `/gifs/${imageName}`;
  const className = `${styles.featureItem} ${
    isEven ? styles.featureItemEven : styles.featureItemOdd
  }`;
  return (
    <li key={title} className={className}>
      {isEven && (
        <>
          <div className={styles.featureHeader}>
            <h3 className={styles.featureItemTitle}>
              <Icon size={20} className={styles.customIcon} />

              {title}
            </h3>
            <p className={styles.featureItemDescription}>{description}</p>
          </div>
          <div className={styles.featureContent}>
            <Image
              className={styles.featureImage}
              src={imageUrl}
              alt="Key feature item"
              aria-disabled
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              loading="eager"
              priority
              fetchPriority="high"
              unoptimized
            />
          </div>
        </>
      )}
      {!isEven && (
        <>
          <div className={styles.featureContent}>
            <Image
              className={styles.featureImage}
              src={imageUrl}
              alt="Key feature item"
              aria-disabled
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              loading="eager"
              priority
              fetchPriority="high"
              unoptimized
            />
          </div>

          <div className={styles.featureHeader}>
            <h3 className={styles.featureItemTitle}>
              <Icon size={20} className={styles.customIcon} />

              {title}
            </h3>
            <p className={styles.featureItemDescription}>{description}</p>
          </div>
        </>
      )}
    </li>
  );
};
