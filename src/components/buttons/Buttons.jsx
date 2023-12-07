import styles from "./Buttons.module.css";
import { useState } from "react";
export const Button = () => {
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);

  const showLiked = () => {
    setLike((prevLike) => !prevLike);
    setDisLike(false);
  };
  const showDisLiked = () => {
    setDisLike((prevDisLike) => !prevDisLike);
    setLike(false);
  };
  return (
    <div className={styles.buttonContainer}>
      <button
        onClick={() => showLiked()}
        className={like ? styles.likeActive : styles.like}
      >
        Like
      </button>
      <button
        onClick={showDisLiked}
        className={dislike ? styles.dislikeActive : styles.dislike}
      >
        Dislike
      </button>
    </div>
  );
};
