const initialState = {
    employees: []
}


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEES":
      return {
        ...state,
        employees: [...state, action.payload],
      };
    default:
      return state;
  }
};
