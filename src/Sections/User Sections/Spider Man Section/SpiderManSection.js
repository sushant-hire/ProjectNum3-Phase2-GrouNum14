import React from "react";
import styles from "./SpiderManSection.module.css";
import Buttons from "../../../Molecules/Buttons/Buttons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";

const SpiderManSection = () => {
  return (
    <div className={styles.ProfileMainContainer}>
      <div className={styles.ProfileHeadingContainer}>
        <h3 className={styles.ProfileHeading3Container}>
          {" "}
          <Link to="/home">
            <ArrowBackIcon
              style={{
                marginRight: "1.5rem",
                position: "relative",
                top: "0.7rem",
              }}
            />
          </Link>
          Spider Man
        </h3>
        <p className={styles.ProfileHeadingParaContainer}>0 Tweets</p>
      </div>
      <span className={styles.ProfilePhotoContainer}>Photo will be here</span>
      <div className={styles.ProfileDetailsContainer}>
        <p
          style={{
            position: "relative",
            top: "4.2rem",
            marginLeft: "1rem",
            fontSize: "large",
            fontWeight: "bolder",
          }}
        >
          Spider Man
        </p>
        <p
          style={{
            position: "relative",
            top: "3rem",
            marginLeft: "0.9rem",
            fontSize: "0.96rem",
          }}
        >
          @SpiderMan
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            position: "relative",
            top: "2.4rem",
          }}
        >
          <CalendarMonthIcon
            style={{
              position: "relative",
              top: "1.1rem",
              marginLeft: "0.8rem",
              fontSize: "1.2rem",
            }}
          />
          <p
            style={{
              position: "relative",
              right: "0.6rem",
              fontSize: "1rem",
            }}
          >
            {" "}
            Joined March 2020
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginLeft: "1rem",
            fontSize: "0.9rem",
            position: "relative",
            top: "1rem",
          }}
        >
          <p>
            <span style={{ fontWeight: "bolder" }}> 84</span> Following{" "}
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bolder" }}> 9.4M</span> Followers
          </p>
        </div>
        <Buttons
          className={styles.ProfileEditButton}
          buttonText="Edit Profile"
        />{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Buttons className={styles.ProfileTodoButton} buttonText="Tweets" />
          <Buttons
            className={styles.ProfileTodoButton}
            buttonText="Tweets & Replies"
          />
          <Buttons className={styles.ProfileTodoButton} buttonText="Media" />
          <Buttons className={styles.ProfileTodoButton} buttonText="Likes" />
        </div>
      </div>
      <img
        style={{
          height: "7.9rem",
          width: "7.9rem",
          border: "4px solid white",
          borderRadius: "555px",
          position: "relative",
          left: "1.2rem",
          bottom: "23rem",
          cursor: "pointer",
        }}
        src="https://im.rediff.com/300-300/movies/2019/jul/08spider-man1.jpg"
        alt="snub"
      ></img>
    </div>
  );
};

export default SpiderManSection;
