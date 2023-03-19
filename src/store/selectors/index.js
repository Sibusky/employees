const selectEmployessReducer = (state) => {
  return state?.employeesReducer;
};

export const selectIsLoadingEmployees = (state) => {
  return selectEmployessReducer(state).isLoading;
};

export const selectEmployeeList = (state) => {
  return selectEmployessReducer(state)?.employees;
};
