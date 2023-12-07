/* eslint-disable react/prop-types */
import styles from "./Header.module.css";
export const Header = ({ firstName, lastName, role }) => {
  return (
    <header className={styles.header}>
      <div className={styles.nameContainer}>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <div className={styles.roleContainer}>
        <p>{role}</p>
      </div>
    </header>
  );
};
