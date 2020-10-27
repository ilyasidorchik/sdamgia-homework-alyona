import React from "react";
import { useSelector } from "react-redux";

import { selectSubject } from "../../modules/subject";

const Header = () => {
  const subject = useSelector(selectSubject);

  return (
    <header>
      <span>Привет, Даша!</span>

      {subject && <span> · Изучай предмет «{subject.title}»</span>}
    </header>
  );
};

export default Header;
