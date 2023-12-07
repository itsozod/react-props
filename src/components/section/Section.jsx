/* eslint-disable react/prop-types */
import styles from "./Section.module.css";

export const Section = ({ title, children }) => {
  return (
    <section className={styles.sectionContainer}>
      {title ? (
        <h2 className={styles.sectionTitle}>{title}</h2>
      ) : (
        <h2 className={styles.sectionTitle}>Title not found</h2>
      )}
      <article className={styles.articleContainer}>{children}</article>
    </section>
  );
};
