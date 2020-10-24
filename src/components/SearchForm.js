import React, { useState } from "react";
import { cn } from "@bem-react/classname";

import { useHelpers } from "./hooks";
import Subject from "./Subject/Subject";
import "./SearchForm.scss";

const SearchForm = () => {
  const cnSearchForm = cn("SearchForm");
  const [value, setValue] = useState("");

  const { handleChange, handleClick } = useHelpers(value, setValue);

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
      <Subject />
    </div>
  );
};

export default SearchForm;
