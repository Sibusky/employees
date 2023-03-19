const initialState = {
    employees: []
}

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMPLOYEES":
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
};
