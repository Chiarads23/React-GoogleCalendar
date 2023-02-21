//library to easily manipulate time
import dayjs from "dayjs";

//shared functions to use across some of the components

//`getMonth` gives an array containing a day for each day of the calendar
export function getMonth(month = dayjs().month()) {

  month = Math.floor(month);

  const year = dayjs().year();

  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();

  let currentMonthCount = 1 - firstDayOfMonth;
  
  //first we generate 5 rows for each week, and each one will be filled with an array of 7 (columns for each day of the week).  here we map and return a count increasing everytime we fill a new value. Finally we return the day object.
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
