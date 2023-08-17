import date from "date-and-time";

const dateFormat = "YYYY-MM-DD";

export const getDateKeyFromDate = (prevDate: Date, format = dateFormat) => {
  return date.format(prevDate, format);
};

export const addDayFromDateKey = (prevDateString: string, diff: number) => {
  const prevDate = date.parse(prevDateString, dateFormat);
  return date.format(date.addDays(prevDate, diff), dateFormat);
};

export const getDateFromDateKey = (dateKey: string, format = dateFormat) => {
  return date.parse(dateKey, format);
};

export const getDisplayDate = (dateKey: Date, format = dateFormat) => {
  return date.format(dateKey, format);
};

export const getDisplayDay = (currentDate: Date, format = "ddd") => {
  return date.format(currentDate, format);
};
