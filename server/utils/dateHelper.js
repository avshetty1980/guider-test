const { Settings, DateTime } = require("luxon");

Settings.defaultZoneName = "utc";

const diffDates = (startDate, endDate) =>{
  // startDate = DateTime.fromFormat(startDate, "dd/MM/yyyy")
  // endDate = DateTime.fromFormat(endDate, "dd/MM/yyyy")

  return endDate.diff(startDate, ["days", "hours"]);
}

exports.isSameDayMonthYear = (d1, d2) => {
  return (
    d1.hasSame(d2, "year") && d1.hasSame(d2, "month") && d1.hasSame(d2, "day")
  );
};

exports.now = () => DateTime.utc();

exports.durationInDays = (startDate, endDate) => {

  // startDate = DateTime.fromFormat(startDate, "dd/MM/yyyy")
  // endDate = DateTime.fromFormat(endDate, "dd/MM/yyyy")

  const duration = diffDates(endDate, endDate);

  const days = Math.ceil(duration.as("days"));

  if (days == 1 && startDate.day === endDate.day) {
    return 0;
  }

  return days;
};

exports.durationInHours = (startDate, endDate) => {
  // startDate = DateTime.fromFormat(startDate, "dd/MM/yyyy")
  // endDate = DateTime.fromFormat(endDate, "dd/MM/yyyy")

  const duration = diffDates(startDate, endDate);

  return Math.ceil(duration.as("hours"));
};

exports.formatDateToYearMonthDay = date => date.toISODate();
exports.fromISOString = DateTime.fromISO;


