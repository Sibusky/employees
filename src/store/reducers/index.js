export const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return {
        ...state,
      };
    default:
      return state;
  }
};
