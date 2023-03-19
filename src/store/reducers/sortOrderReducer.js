import { SET_BIRTHDAY_SORT_ORDER, SET_NAME_SORT_ORDER } from "../actions";

const initialState = {
  isAscNameOrder: null,
  isAscBirthdayOrder: null,
  lastClicked: null,
};

export const sortOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BIRTHDAY_SORT_ORDER:
      return {
        ...state,
        isAscBirthdayOrder: action.payload,
        isAscNameOrder: !action.payload,
        lastClicked: SET_BIRTHDAY_SORT_ORDER,
      };
    case SET_NAME_SORT_ORDER:
      return {
        ...state,
        isAscNameOrder: action.payload,
        isAscBirthdayOrder: !action.payload,
        lastClicked: SET_NAME_SORT_ORDER,
      };
    default:
      return state;
  }
};
