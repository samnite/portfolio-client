import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterItem = ({ icon, link, title }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} size="2x" color="#93cb52" />
      </a>
      <p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </p>
    </div>
  );
};

export default FooterItem;
