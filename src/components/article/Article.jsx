/* eslint-disable react/prop-types */
import styles from "./Article.module.css";
export const Article = ({ title, subtitle, img, children }) => {
  return (
    <article className={styles.articleCard}>
      {title ? <h3>{title}</h3> : <h3>Title not found</h3>}
      {subtitle ? (
        <p className={styles.subtitle}>{subtitle}</p>
      ) : (
        <p>Subtitle not found</p>
      )}
      {img ? (
        <img className={styles.articleImg} src={img} alt="country" />
      ) : (
        "Image not found"
      )}
      {children}
    </article>
  );
};
