import React from "react";
import PropTypes from "prop-types";
import AvatarImage from "../assets/avatar-image.png";
import "../styles/Avatar.css";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadowOverlay ${page}`;

  return (
    <>
      <span className={spanClass} />
      <img src={AvatarImage} className={avatarClass} alt="Profile Avatar" />
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;