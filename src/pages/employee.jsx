import React, { useMemo, useState, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { EDIT_EMPLOYEE } from '../store/actions';

import { rolesMap } from "../components/employees-filter/constants";
import { selectEmployeeList } from "../store/selectors";

const EMPLOYEE_CARD_TITLE = 'Карточка сотрудника';
const EMPLOYEE_NAME_PLACEHOLDER = 'Введите имя сотрудника';
const EMPLOYEE_PHONE_PLACEHOLDER = 'Введите телефон сотрудника';
const EMPLOYEE_DATE_PLACEHOLDER = 'Введите дату рождения сотрудника';
const SAVE_CHANGES = 'Сохранить изменения';
const ADD_NEW_USER = 'Добавить пользователя';
const GO_BACK = '< Назад';

const EmployeeComponent = ({ editEmployee, employees }) => {
  const { employeeId } = useParams();
  const employee = useMemo(() => (employees?.find(employee => employee.id === Number(employeeId)) ?? {}), [employees, employeeId]) ;

  const [name, setName] = useState(employee?.name ?? '');
  const [phone, setPhone] = useState(employee?.phone ?? '');
  const [role, setRole] = useState(employee?.role ?? '');
  const [date, setDate] = useState(employee?.date ?? '');
  const [isArchived, setArchived] = useState(employee?.isArchived ?? '');

  let navigate = useNavigate();

  const handleChangeName = useCallback((ev) => {
    setName(ev.target.value);
  }, [setName]);

  const handleChangePhone = useCallback((ev) => {
    setPhone(ev.target.value);
  }, [setPhone]);

  const handleChangeRole = useCallback((ev) => {
    setRole(ev.target.value);
  }, [setRole]);

  const handleChangeDate = useCallback((ev) => {
    setDate(ev.target.value);
  }, [setDate]);

  const handleChangeArchived = useCallback((ev) => {
    setArchived(ev.target.checked);
  }, [setArchived]);

  const handleSubmit = useCallback((ev) => {
    ev.preventDefault();
    editEmployee({
      id: employee.id,
      name,
      phone,
      role,
      date,
      isArchived,
    });
    navigate('/');
  }, [
    employee,
    editEmployee,
    name,
    phone,
    role,
    date,
    isArchived,
    navigate
  ])

  return (
     <div>
        <h1>{EMPLOYEE_CARD_TITLE}</h1>
        <form>
            <input placeholder={EMPLOYEE_NAME_PLACEHOLDER} type="text" value={name} onChange={handleChangeName} />
            <select value={role} onChange={handleChangeRole}>
                {Object.entries(rolesMap).map(([role, roleName]) => <option value={role}>{roleName}</option>)}
            </select>
            <input placeholder={EMPLOYEE_PHONE_PLACEHOLDER} type="tel" value={phone} onChange={handleChangePhone} />
            <input placeholder={EMPLOYEE_DATE_PLACEHOLDER} type="date" value={date} onChange={handleChangeDate} />
            <input type="checkbox" checked={isArchived} onChange={handleChangeArchived} />

            <Link to='/'>{GO_BACK}</Link>

            <button type="submit" onClick={handleSubmit}>{employee ? SAVE_CHANGES : ADD_NEW_USER}</button>
        </form>
     </div>
  );
};

const mapStateToProps = (state) => ({
    employees: selectEmployeeList(state),
});

const mapDispatchToProps = (dispatch) => ({
    editEmployee: (payload) => dispatch({ type: EDIT_EMPLOYEE, payload }),
});

export const Employee = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeComponent);
