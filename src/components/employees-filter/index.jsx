import React, { useCallback } from "react";
import "./styles.css";
import { rolesMap } from "./constants";
import { connect } from "react-redux";
import { CHOOSE_ROLE } from "./constants";

import { SET_ARCHIVED_FILTER, SET_ROLE_FILTER } from "../../store/actions";
import { Link } from "react-router-dom";

import { ADD_EMPLOYEE, IS_ARCHIVED } from "./constants";

function EmployeesFilterComponent({ setRoleFilter, setArchivedFilter }) {
  const handleChangeRole = useCallback(
    (ev) => {
      setRoleFilter(ev.target.value);
    },
    [setRoleFilter]
  );

  const handleChangeArchived = useCallback(
    (ev) => {
      setArchivedFilter(ev.target.checked);
    },
    [setArchivedFilter]
  );

  return (
    <section className="filter section">
      <div className="filter__container container">
        <h1 className="section__title">Список сотрудников</h1>
        <div className="filter__filter-and-button">
          <div className="filter__handlers">
            <p className="filter__handlers-text text">ФИЛЬТРЫ</p>
            <form className="filter__form">
              <select
                className="filter__select text"
                defaultValue={CHOOSE_ROLE}
                onChange={handleChangeRole}
              >
                <option value={CHOOSE_ROLE} disabled>
                  {CHOOSE_ROLE}
                </option>
                {Object.entries(rolesMap).map(([value, name]) => (
                  <option value={value} key={value}>
                    {name}
                  </option>
                ))}
              </select>
              <div className="filter__checkbox-container">
                <label
                  className="filter__checkbox-label checkbox-label text link"
                  htmlFor="filter-checkbox"
                >
                  {IS_ARCHIVED}
                </label>
                <input
                  className="filter__checkbox"
                  type="checkbox"
                  id="filter-checkbox"
                  onChange={handleChangeArchived}
                />
              </div>
            </form>
          </div>
          <Link className="button" to="/new">
            <p className="filter__add-employee-text text">{ADD_EMPLOYEE}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setRoleFilter: (role) => dispatch({ type: SET_ROLE_FILTER, payload: role }),
  setArchivedFilter: (isArchived) =>
    dispatch({ type: SET_ARCHIVED_FILTER, payload: isArchived }),
});

export const EmployeesFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesFilterComponent);
