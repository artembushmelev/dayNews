import React from "react";
import styles from "./styles.module.css";
import { Images } from "../Images/Images";
import { formatTimeAgo } from "../helpers/formatTimeAgo";

export const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Images image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};
