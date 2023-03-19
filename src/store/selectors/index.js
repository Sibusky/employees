import { SET_BIRTHDAY_SORT_ORDER, SET_NAME_SORT_ORDER } from '../../store/actions';
import { formatDate } from '../../utils/formatDate';

const selectEmployessReducer = (state) => {
  return state?.employeesReducer;
};

export const selectIsLoadingEmployees = (state) => {
  return selectEmployessReducer(state).isLoading;
}

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

const selectSortOrderReducer = (state) => {
  return state?.sortOrderReducer;
};

export const selectNameOrderSort = (state) => {
  return selectSortOrderReducer(state).isAscNameOrder;
};

export const selectBirthdayOrderSort = (state) => {
  return selectSortOrderReducer(state).isAscBirthdayOrder;
};

const selectLastClickedSort = (state) => {
  return selectSortOrderReducer(state).lastClicked;
}

export const getFilteredAndSortedEmployessList = (state) => {
  const filteredEmployeesList = selectFilteredEmployeeList(state);

  const isAscNameOrder = selectNameOrderSort(state);
  const isAscBirthdayOrder = selectBirthdayOrderSort(state);
  const lastClicked = selectLastClickedSort(state);

  if (lastClicked === SET_NAME_SORT_ORDER) {
    return filteredEmployeesList.sort((a, b) => {
      const result = a.name < b.name
        ? 1
        : -1;

      return isAscNameOrder ? result : -result;
    })
  } else if (lastClicked === SET_BIRTHDAY_SORT_ORDER) {
    return filteredEmployeesList.sort((a, b) => {
      const result = Date.parse(formatDate(a.birthday)) < Date.parse(formatDate(b.birthday))
        ? 1
        : -1;

      return isAscBirthdayOrder ? result : -result;
    })
  }

  return filteredEmployeesList;
};
