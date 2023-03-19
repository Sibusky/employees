const selectEmployessReducer = (state) => {
  return state?.employeesReducer;
};

export const selectIsLoadingEmployees = (state) => {
  return selectEmployessReducer(state).isLoading;
};

export const selectEmployeeList = (state) => {
  return selectEmployessReducer(state)?.employees;
};

const selectFiltersReducer = (state) => {
  return state?.filtersReducer;
};

const selectRoleFilter = (state) => {
  return selectFiltersReducer(state)?.roleFilter;
};

const selectIsArchived = (state) => {
  return selectFiltersReducer(state)?.isArchivedFilter;
};

export const selectFilteredEmployeeList = (state) => {
  const role = selectRoleFilter(state);
  const isArchived = selectIsArchived(state);
  const employees = selectEmployeeList(state);

  const filteredByRole = role
    ? employees?.filter((employee) => employee.role === role)
    : employees;

  const filteredByArchived = isArchived
    ? filteredByRole.filter((employee) => employee.isArchive === isArchived)
    : filteredByRole;

  return filteredByArchived;
};
