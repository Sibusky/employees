import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  selectBirthdayOrderSort,
  selectNameOrderSort,
} from "../../store/selectors";
import {
  SET_BIRTHDAY_SORT_ORDER,
  SET_NAME_SORT_ORDER,
} from "../../store/actions";

import {
  EMPLOYEE_NAME,
  EMPLOYEE_ROLE,
  EMPLOYEE_PHONE,
  EMPLOYEE_BIRTHDAY,
  ADD_EMPLOYEE
} from "./constants";
import "./styles.css";

import { translateRoles } from "../../utils/translateRoles";

function EmployeesListComponent({
  employees,
  isAscNameOrder,
  isAscBirthdayOrder,
  setNameSortOrder,
  setBirthdaySortOrder,
}) {
  const [isAscSortOrderName, setAscSortOrderName] = useState(isAscNameOrder);
  const [isAscSortOrderDate, setAscSortOrderDate] =
    useState(isAscBirthdayOrder);

  const handleClickNameColumn = useCallback(() => {
    setNameSortOrder(!isAscSortOrderName);
    setAscSortOrderName(!isAscSortOrderName);
  }, [setNameSortOrder, isAscSortOrderName, setAscSortOrderName]);

  const handleClickBirthdayColumn = useCallback(() => {
    setBirthdaySortOrder(!isAscSortOrderDate);
    setAscSortOrderDate(!isAscSortOrderDate);
  }, [setBirthdaySortOrder, isAscSortOrderDate, setAscSortOrderDate]);

    console.log(employees)

  return (
    <section className="employees section">
      <div className="employees__table">
        <div className="employees__table-row">
          <div
            className="employees__table-cell employees__table-header"
            onClick={handleClickNameColumn}
          >{`${EMPLOYEE_NAME} ${isAscSortOrderName ? "v" : "^"}`}</div>

          <div className="employees__table-cell employees__table-header">{EMPLOYEE_ROLE}</div>
          <div className="employees__table-cell employees__table-header">{EMPLOYEE_PHONE}</div>
          <div className="employees__table-cell employees__table-header" onClick={handleClickBirthdayColumn}>
            {EMPLOYEE_BIRTHDAY}
          </div>
        </div>
        {employees?.map(({ id, name, role, phone, birthday }) => (
          <Link to={`edit/${id}`} key={id}>
            <div className="employees__table-row">
              <div className="employees__table-cell">{name}</div>
              <div className="employees__table-cell">{translateRoles(role)}</div>
              <div className="employees__table-cell">{phone}</div>
              <div className="employees__table-cell">{birthday}</div>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/new">{ADD_EMPLOYEE}</Link>

    </section>
  );
}

const mapStateToProps = (state) => ({
  isAscNameOrder: selectNameOrderSort(state),
  isAscBirthdayOrder: selectBirthdayOrderSort(state),
});

const mapDispatchToProps = (dispatch) => ({
  setBirthdaySortOrder: (payload) =>
    dispatch({ type: SET_BIRTHDAY_SORT_ORDER, payload }),
  setNameSortOrder: (payload) =>
    dispatch({ type: SET_NAME_SORT_ORDER, payload }),
});

export const EmployeesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesListComponent);
