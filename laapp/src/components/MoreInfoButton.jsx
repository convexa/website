import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MoreInfoButton = props => {
  return (
    <a href={props.to} target='_blank' rel='noopener noreferrer' className={`more-link ${props.className}`}>
      {props.text}
      <FontAwesomeIcon
        icon={["fas", "long-arrow-alt-right"]}
        className="icon"
      />
    </a>
  );
};

export default MoreInfoButton;
