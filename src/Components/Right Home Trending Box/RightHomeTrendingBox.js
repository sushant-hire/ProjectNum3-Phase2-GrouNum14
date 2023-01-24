import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./RightHomeTrendingBox.module.css";
import RightMoreButtonPopover from "../../Molecules/Right More Button Popover/RightMoreButtonPopover";

const RightHomeTrendingBox = () => {
  const [isInterested, setIsInterested] = useState(false);

  function setInterestedStatus() {
    setIsInterested(true);
    // console.log(setIsInterested, "Interest shown");
  }

  const trendingData = [
    {
      title1: "Trending in India",
      title2: "#Corruption 💸",
      title3: "Trending with #AchheDin",
      isNotInterested: false,
      id: 1,
    },
    {
      title1: "Trending in Vidarbha",
      title2: "#WaterNotComing 💧",
      title3: "Trending with #Drought",
      isNotInterested: false,
      id: 2,
    },
    {
      title1: "Trending in Jharkhand",
      title2: "#MahuaAddictionGoneBad 🍺",
      title3: "Trending with #HemantSoren",
      isNotInterested: false,
      id: 3,
    },
    {
      title1: "Trending in Hyderabad",
      title2: "#KauvvaBiryaani 🐧",
      title3: "Trending with #VijayRaaz",
      isNotInterested: false,
      id: 4,
    },
    {
      title1: "Trending in Bihar",
      title2: "#BoycottExams 📋",
      title3: "Trending with #LaluJiYadav",
      isNotInterested: false,
      id: 5,
    },
  ];
  return (
    <div className={styles.TrendingBoxMainContainer}>
      <h3 className={styles.TrendingBoxHeadingContainer}>What's happening?</h3>
      {trendingData.map((button, index) => (
        <button key={index} className={styles.TrendingBoxButtonContainer}>
          <div className={styles.TrendingBox}>
            <div> {button.title1}</div>
            <div style={{ fontWeight: "bold" }}> {button.title2}</div>
            <div> {button.title3}</div>
          </div>
          <span onClick={setInterestedStatus}>
            <RightMoreButtonPopover />
          </span>
        </button>
      ))}
      <p className={styles.TrendingBoxShowMoreContainer}>Show more</p>
    </div>
  );
};

export default RightHomeTrendingBox;
