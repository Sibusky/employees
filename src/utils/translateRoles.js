// Перевожу должности на русский
export const translateRoles = (position) => {
  if (position === "driver") {
    return "Водитель";
  } else if (position === "waiter") {
    return "Официант";
  } else if (position === "cook") {
    return "Повар";
  } else {
    return "Другая должность";
  }
};
