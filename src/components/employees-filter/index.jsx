import React, { useCallback } from "react";
import "./styles.css";
import { rolesMap } from "./constants";
import { connect } from "react-redux";

import { SET_ARCHIVED_FILTER, SET_ROLE_FILTER } from "../../store/actions";

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
    <form>
      <input type="checkbox" onChange={handleChangeArchived} />
      <select onChange={handleChangeRole}>
        {Object.entries(rolesMap).map(([value, name]) => (
          <option value={value} key={value}>
            {name}
          </option>
        ))}
      </select>
    </form>
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
