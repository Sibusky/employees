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

  return (
    <section className="employees section">
      <div className="employees__container container">
        <div className="employees__table">
          <div className="employees__table-row">
            <div
              className="employees__table-cell employees__table-header link"
              onClick={handleClickNameColumn}
            >
              <p className="employees__table-header text">
                {`${EMPLOYEE_NAME} ${
                  isAscSortOrderName === null
                    ? "▼▲"
                    : isAscSortOrderName
                    ? "▼"
                    : "▲"
                }`}
              </p>
            </div>
            <div className="employees__table-cell employees__table-header">
              <p className="employees__table-header text">{EMPLOYEE_ROLE}</p>
            </div>
            <div className="employees__table-cell employees__table-header">
              <p className="employees__table-header text">{EMPLOYEE_PHONE}</p>
            </div>
            <div
              className="employees__table-cell employees__table-header link"
              onClick={handleClickBirthdayColumn}
            >
              <p className="employees__table-header text">
                {`${EMPLOYEE_BIRTHDAY} ${
                  isAscSortOrderDate === null
                    ? "▼▲"
                    : isAscSortOrderDate
                    ? "▼"
                    : "▲"
                }`}
              </p>
            </div>
          </div>
          {employees?.map(({ id, name, role, phone, birthday }) => (
            <Link className="employees__link link" to={`edit/${id}`} key={id}>
              <div className="employees__table-row">
                <div className="employees__table-cell">
                  <p className="text">{name}</p>
                </div>
                <div className="employees__table-cell">
                  <p className="text"> {translateRoles(role)}</p>
                </div>
                <div className="employees__table-cell">
                  <p className="text">{phone}</p>
                </div>
                <div className="employees__table-cell">
                  <p className="text">{birthday}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
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
