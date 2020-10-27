import React from "react";
import { useSelector } from "react-redux";

import { selectSubject } from "../../modules/subject";

const Footer = () => {
  const subject = useSelector(selectSubject);

  return (
    <footer>
      {subject && (
        <span> «{subject.title}» очень важный для тебя предмет! </span>
      )}
    </footer>
  );
};

export default Footer;
