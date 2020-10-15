import React, { useState, useCallback } from "react";
import { cn } from "@bem-react/classname";
import  api  from "./Api";
import Subject from "./Subject";
import "./SearchForm.scss";

const SearchForm = () => {
  const cnSearchForm = cn("SearchForm");
  const [value, setValue] = useState("");
  const [subject, setSubject] = useState({
    name: "",
    title: "",
  });

  const useHelpers = () =>{    
    return {
       handleChange: useCallback((e) => {
      setValue(e.target.value);
    }, []),
  
    handleClick: useCallback(
      async (e) => {
        e.preventDefault(); 
        const { name, title } = await api(value); 
        setSubject({
          name,
          title,
        });
      },
      [value]
    )
    }   
  
  };

  const {handleChange, handleClick} = useHelpers(); 

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
