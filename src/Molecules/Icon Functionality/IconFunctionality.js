import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import FavoriteIcon from "@mui/icons-material/Favorite";

const IconFunctionality = () => {
  const [color, setColor] = useState(<FavoriteBorderIcon />);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setColor(<FavoriteIcon style={{ color: "red" }} />);
    setIsFavorited(!isFavorited);
  };
  return (
    <span onClick={handleClick}>
      {isFavorited ? (
        <FavoriteIcon style={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </span>
  );
};

export default IconFunctionality;
