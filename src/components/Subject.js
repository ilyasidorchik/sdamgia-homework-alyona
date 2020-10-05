import React from "react";

const Subject = ({ name, title }) => {
  return (
    <div>
      <a href={`https://${name}-ege.sdamgia.ru/`}> {title} </a>
    </div>
  );
};

export default Subject;
