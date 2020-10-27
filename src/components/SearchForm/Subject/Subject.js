import React from "react";
import { useSelector } from "react-redux";

import { selectSubject } from "../../../modules/subject";

const Subject = () => {
  const subject = useSelector(selectSubject);

  return (
    subject && (
      <a href={`https://${subject.name}-ege.sdamgia.ru/`}>{subject.title}</a>
    )
  );
};

export default Subject;
