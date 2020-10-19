import React, { useState } from "react";
import { cn } from "@bem-react/classname";

import useHelpers from "./hooks/useHelpers";
import Subject from "./Subject";
import "./SearchForm.scss";

const SearchForm = () => {
  const cnSearchForm = cn("SearchForm");
  const [value, setValue] = useState("");
  const [subject, setSubject] = useState({
    name: "",
    title: "",
  });
  const { handleChange, handleClick } = useHelpers(
    [value, setValue],
    setSubject
  );

  return (
    <div>
      <form className={cnSearchForm()}>
        <input
          className={cnSearchForm("Input")}
          type="text"
          placeholder="Search here"
          value={value}
          onChange={handleChange}
        />
        <button
          className={cnSearchForm("Button", { disabled: !value })}
          disabled={!value}
          onClick={handleClick}
        >
          Поиск
        </button>
      </form>
      {subject && <Subject name={subject.name} title={subject.title} />}
    </div>
  );
};

export default SearchForm;
