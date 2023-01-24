import React from "react";
import styles from "./Home.module.css";
import LeftHomeSection from "../../Sections/Left Home Section/LeftHomeSection";
import MiddleHomeSection from "../../Sections/Middle Home Section/MiddleHomeSection";
import RightHomeSection from "../../Sections/Right Home Section/RightHomeSection";

const Home = () => {
  return (
    <div className={styles.ParentHomeContainer}>
      <LeftHomeSection />
      <MiddleHomeSection />
      <RightHomeSection />
    </div>
  );
};

export default Home;
