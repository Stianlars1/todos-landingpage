import { LightBeam } from "@stianlarsen/react-light-beam";
import { Libre_Franklin } from "next/font/google";
import Image from "next/image";
import { CardStackOnly } from "../cardStackOnly/cardStackOnly";
import styles from "./css/aboutUsContent.module.css";
const libre = Libre_Franklin({ subsets: ["latin"] });

export const AboutUsContent = () => {
  return (
    <>
      <main className={styles.aboutUsContent} style={libre.style}>
        <section className={`${styles.section} ${styles.taskSection}`}>
          <LightBeam
            colorLightmode="hsl(var(--card))"
            className={styles.lightBeam}
          />
          <div className={styles.taskSectionHeader}>
            <h2 className={styles.heading2}>
              Empowering Your Workflow, One Task at a Time
            </h2>

            <div>
              <p className={styles.paragraph}>
                TaskBuddy was born out of a desire to create a tool that aligns
                with the way you work. The journey began when our founder, Stian
                Larsen, recognized the need for a task management app that was
                both flexible and user-friendly.
              </p>

              <p className={styles.paragraph}>
                After navigating countless options, it became clear that
                existing solutions were either too cumbersome or too limited.
                That’s when TaskBuddy was conceived, with a commitment to blend
                simplicity and power into one seamless experience.
              </p>
            </div>
          </div>
          <div className={styles.taskSectionCards}>
            <CardStackOnly />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>
            A Vision for Productivity Excellence
          </h2>
          <p className={styles.paragraph}>
            TaskBuddy is the result of a singular vision: to create a task
            management tool that adapts to your needs. Driven by a deep
            understanding of productivity challenges, Stian has dedicated
            himself to building a tool that helps you stay organized and
            efficient. TaskBuddy reflects a commitment to delivering a product
            that not only meets but exceeds the expectations of individuals and
            teams who prioritize quality and efficiency.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>Our Core Values</h2>
          <ul className={styles.list}>
            <li className={styles.listitem}>
              <h3 className={styles.heading3}>User-Centric Design</h3>
              <p className={styles.paragraph}>
                TaskBuddy is built with users in mind, ensuring that every
                feature is designed to enhance productivity without adding
                unnecessary complexity.
              </p>
            </li>

            <li className={styles.listitem}>
              <h3 className={styles.heading3}>Continuous Improvement</h3>
              <p className={styles.paragraph}>
                We are committed to constantly refining and improving TaskBuddy
                based on user feedback and the latest technological
                advancements.
              </p>
            </li>

            <li className={styles.listitem}>
              <h3 className={styles.heading3}>Transparency and Trust</h3>
              <p className={styles.paragraph}>
                We believe in open communication with our users and are
                committed to maintaining the highest standards of privacy and
                security.
              </p>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>Meet the Founder & CEO</h2>
          <ul className={styles.teamList}>
            <li className={styles.teamMember}>
              <Image
                alt="Stian Larsen, Founder & CEO of TaskBuddy"
                className={styles.image}
                height={300}
                width={300}
                src="/stian-larsen.jpg"
              />
              <p className={styles.paragraph}>
                Hello! I’m Stian Larsen, the founder and CEO of TaskBuddy. At 27
                years old, I’ve spent several years immersed in the world of
                software development, with a particular passion for creating
                tools that make people’s lives easier.
              </p>
              <p className={styles.paragraph}>
                I hold a bachelor’s degree in Software Engineering, and my
                background as a FullStack developer has equipped me with the
                skills to bring TaskBuddy to life, from concept to fully
                functioning app. I’ve personally designed and built this app and
                its landing page, ensuring that every feature and detail aligns
                with my vision of what a productivity tool should be.
              </p>
              <p className={styles.paragraph}>
                I’m constantly building and exploring new ideas, driven by a
                love for innovation and problem-solving. TaskBuddy is the
                culmination of my experience, creativity, and dedication to
                making task management effortless for everyone. And this is just
                the beginning—I’m excited to continue evolving TaskBuddy and
                bringing new, valuable features to our users.
              </p>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>Our Journey So Far</h2>
          <p className={styles.paragraph}>
            Since our launch in 2024, TaskBuddy has grown rapidly, thanks to our
            amazing users who continue to support and provide valuable feedback.
            We’ve gone from a simple idea to a powerful task management solution
            used by thousands of individuals and teams worldwide.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>What’s Next for TaskBuddy?</h2>
          <p className={styles.paragraph}>
            We’re just getting started! TaskBuddy will continue to evolve with
            new features and improvements to better serve our users. Whether
            it’s expanding integration capabilities, adding new customization
            options, or improving performance, our focus is always on delivering
            the best possible experience.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>Join the TaskBuddy Journey</h2>
          <p className={styles.paragraph}>
            Join us as we continue to innovate and push the boundaries of what a
            task management tool can do. Whether you’re a freelancer, a small
            team, or a large organization, TaskBuddy is here to help you achieve
            your goals.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>Get in Touch</h2>
          <p className={styles.paragraph}>
            We love hearing from our users! If you have any questions, feedback,
            or just want to say hello, feel free to reach out to us at{" "}
            <a
              aria-label="Contact us at post@taskbuddy.dev"
              className={styles.linkHref}
              href="mailto:post@taskbuddy.com"
            >
              post@taskbuddy.com
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
};
