import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { fetchSubjectSuccess } from "../../../modules/subject";
import { getSearchResult } from "../api";

export const useHelpers = (value, setValue) => {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const handleClick = useCallback(
    async (e) => {
      e.preventDefault();

      const { name, title } = await getSearchResult(value);

      dispatch(
        fetchSubjectSuccess({
          name,
          title,
        })
      );
    },
    [dispatch, value]
  );

  return {
    handleChange,
    handleClick,
  };
};
