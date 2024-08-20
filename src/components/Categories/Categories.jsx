import React from "react";
import styles from "./styles.module.css";

export const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        return (
          <button
            onClick={() => {
              setSelectedCategory(category);
            }}
            key={categories}
            className={selectedCategory === category ? styles.active : styles.item}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
