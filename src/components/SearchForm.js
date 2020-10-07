import React, { useState, useCallback } from 'react';
import { cn } from '@bem-react/classname';

import Subject from './Subject';
import './SearchForm.css';

const SearchForm = () => {
  const cnSearchForm = cn('SearchForm');
  const [value, setValue] = useState('');
  const [subject, setSubject] = useState({
    name: '',
    title: '',
  });

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleClick = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await fetch(
        `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
      );
      const data = await response.json();
      const { name, title } = await data.subject;

      setSubject({
        name,
        title,
      });
    },
    [value]
  );

  return (
    <div>
      <form className={cnSearchForm()}>
        <input
          className={cnSearchForm('Input')}
          type="text"
          placeholder="Search here"
          value={value}
          onChange={handleChange}
        />
        <button className={cnSearchForm('Button')} onClick={handleClick}>
          Поиск
        </button>
      </form>
      {subject && <Subject name={subject.name} title={subject.title} />}
    </div>
  );
};

export default SearchForm;
