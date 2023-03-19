export function formatDate(date) {
  let dateArr = date.split(".");
  let day = dateArr[0];
  let month = dateArr[1];
  let year = dateArr[2];
  return [month, day, year].join(".");
}
