import * as constants from "./constants";

export const fetchSubjectSuccess = (payload) => ({
  type: constants.FETCH_SUBJECT_SUCCESS,
  payload,
});

const subject = (state = null, action) => {
  switch (action.type) {
    case constants.FETCH_SUBJECT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default subject;
