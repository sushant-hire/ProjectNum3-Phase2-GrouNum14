import React from "react";
import MiddleHomeTopBox from "../../Components/Middle Home Top Box/MiddleHomeTopBox";
import MiddleHomeTweetBox from "../../Components/Middle Home Tweet Box/MiddleHomeTweetBox";
import styles from "./MiddleHomeSection.module.css";

const MiddleHomeSection = () => {
  return (
    <div className={styles.MiddleParentContainer}>
      <MiddleHomeTopBox />
      <MiddleHomeTweetBox />
    </div>
  );
};

export default MiddleHomeSection;
