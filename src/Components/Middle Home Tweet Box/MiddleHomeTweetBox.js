import React from "react";
import styles from "./MiddleHomeTweetBox.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AiOutlineRetweet } from "react-icons/ai";
import { Link } from "react-router-dom";
import CommentDialog from "../Comment Dialog/CommentDialog";
import ViewsDialog from "../Views Dialog/ViewsDialog";
import RetweetPopover from "../../Molecules/Retweet Popover/RetweetPopover";
import IconFunctionality from "../../Molecules/Icon Functionality/IconFunctionality";

const MiddleHomeTweetBox = () => {
  const tweetData = [
    {
      photo1: (
        <Link to="/DoctorStrange">
          <img
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
            src="https://www.sideshow.com/storage/product-images/909994/doctor-strange_marvel_square.jpg"
            alt="drstrange1"
          />
        </Link>
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://giffiles.alphacoders.com/214/214285.gif"
          alt="drstrange2"
        />
      ),
      title1: "Doctor Strange",
      title2: "@DoctorStrange",
      title3: "Never tamper with the spell.",
    },
    {
      photo1: (
        <Link to="/ScarletWitch">
          <img
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
            src="https://www.sideshow.com/storage/product-images/909698/scarlet-witch_marvel_square.jpg"
            alt="scarletwitch1"
          />
        </Link>
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://media0.giphy.com/media/1Euph36tcV2KmmgGEC/giphy.gif"
          alt="scarletwitch2"
        />
      ),
      title1: "Scarlet Witch",
      title2: "@TheScarletWitch",
      title3: "I have everything under control.",
    },
    {
      photo1: (
        <Link to="/SpiderMan">
          <img
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
            src="https://im.rediff.com/300-300/movies/2019/jul/08spider-man1.jpg"
            alt="spidey1"
          />
        </Link>
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://giffiles.alphacoders.com/155/15523.gif"
          alt="spidey2"
        />
      ),
      title1: "Spider Man",
      title2: "@SpiderMan",
      title3: "With great power comes great responsibility.",
    },
    {
      photo1: (
        <Link to="/IncredibleHulk">
          <img
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
            src="https://www.sideshow.com/storage/product-images/3002082/the-incredible-hulk_marvel_square.jpg"
            alt="hulk1"
          />
        </Link>
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://giffiles.alphacoders.com/161/161178.gif"
          alt="hulk2"
        />
      ),
      title1: "Incredible Hulk",
      title2: "@HulkSmash",
      title3: "Maybe I won't smash this.",
    },
    {
      photo1: (
        <img
          style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
          src="https://c.sop.saavncdn.com/Off-The-Top-e489-Loki-episodes-1-2-English-2021-500x500.jpg"
          alt="loki1"
        />
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://thumbs.gfycat.com/HelplessImpeccableGuanaco-size_restricted.gif"
          alt="loki2"
        />
      ),
      title1: "Loki",
      title2: "@GodOfMischief",
      title3: "Trust me, I didn't do anything.",
    },
    {
      photo1: (
        <img
          style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
          src="https://media.wired.com/photos/59fb679f8e9fc3082a139c11/1:1/w_867,h_867,c_limit/Thor-MainArt.jpg"
          alt="thor1"
        />
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://64.media.tumblr.com/c5159c327ebb094a0bb2f2de5f6077c5/8c7d40a49d72f59b-01/s540x810/8e40ba179c4fc5d1e858a34c79dbe3899eba5403.gif"
          alt="thor2"
        />
      ),
      title1: "Thor",
      title2: "@GodOfThunder",
      title3: "I choose to run towards my problems and not away.",
    },
    {
      photo1: (
        <img
          style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
          src="https://www.takely.com.bd/public/uploads/all/k8BR9eFQ9YkZOkP7hV1x7SEeZWbMoS1VNXrLxSWN.jpg"
          alt="ironman1"
        />
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://media.tenor.com/McY9R4_xYOIAAAAC/iron-man-tony-stark.gif"
          alt="ironman2"
        />
      ),
      title1: "Iron Man",
      title2: "@IronMan",
      title3: "Sometimes, you've gotta run before you can walk.",
    },
    {
      photo1: (
        <img
          style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
          src="https://cdna.artstation.com/p/assets/images/images/002/310/684/large/adam-ross-chris-evans-in-captain-america-2-the-winter-soldier.jpg"
          alt="cap1"
        />
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://media.tenor.com/phzTPEhdWXMAAAAC/avengers-captain-america.gif"
          alt="cap2"
        />
      ),
      title1: "Captain America",
      title2: "@HCaptainAmerica",
      title3: "I knocked out Adolf Hitler over 200 times.",
    },
    {
      photo1: (
        <img
          style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
          src="https://c.sop.saavncdn.com/Off-The-Top-8427-Black-Widow-English-2021-500x500.jpg"
          alt="blackwidow1"
        />
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://i.pinimg.com/originals/b0/6b/05/b06b05ba3402b9c482f900d75b18ac31.gif"
          alt="blackwidow2"
        />
      ),
      title1: "Black Widow",
      title2: "@BlackWidow",
      title3: "You should know, I'm a better shot when I'm pissed off.",
    },
    {
      photo1: (
        <img
          style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
          src="https://i.pinimg.com/564x/cd/71/f8/cd71f8262c351e0b2bd0c7c23ef5d14b.jpg"
          alt="Thanos1"
        />
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://www.quirkybyte.com/wp-content/uploads/2018/09/5f689cbb6da0568b2925e0fcb54362a4.gif"
          alt="Thanos2"
        />
      ),
      title1: "Thanos",
      title2: "@Thanos",
      title3: "You should have gone for the head.",
    },
  ];

  return (
    <div
      className={styles.MiddleHomeTweetBoxContainer}
      style={{ border: "0.1px solid gainsboro" }}
    >
      {tweetData.map((button, index) => (
        <button
          key={index}
          className={styles.MiddleHomeTweetBoxButtonContainer}
        >
          <div className={styles.MiddleHomeTweetBoxGrid}>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "0.7rem", cursor: "pointer" }}>
                {" "}
                {button.photo1}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  marginTop: "0.9rem",
                  fontSize: "0.9375rem",
                  marginLeft: "0.2rem",
                  cursor: "pointer",
                }}
              >
                {" "}
                {button.title1}
              </div>
              <div
                style={{
                  marginTop: "0.9rem",
                  fontSize: "0.9375rem",
                  marginLeft: "0.3rem",
                  cursor: "pointer",
                }}
              >
                {" "}
                {button.title2}
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
                marginTop: "0.8rem",
                marginRight: "0.3rem",
                cursor: "pointer",
              }}
            >
              {" "}
              <MoreHorizIcon />
            </div>
          </div>
          <div
            style={{
              fontSize: "1rem",
              textAlign: "left",
              marginLeft: "5.1rem",
              position: "relative",
              bottom: "2.4rem",
            }}
          >
            {" "}
            {button.title3}
          </div>
          <div
            style={{
              marginLeft: "1rem",
              position: "relative",
              left: "1rem",
              bottom: "1.2rem",
              cursor: "pointer",
            }}
          >
            {" "}
            {button.photo2}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "0.5rem",
              marginLeft: "7rem",
              marginRight: "4rem",
              cursor: "pointer",
              position: "relative",
              bottom: "0.8rem",
              cursor: "pointer",
            }}
          >
            <CommentDialog />
            <RetweetPopover style={{ fontSize: "5rem" }} />
            <IconFunctionality style={{ fontSize: "1.4rem" }} />
            <ViewsDialog />
          </div>
        </button>
      ))}
    </div>
  );
};

export default MiddleHomeTweetBox;
