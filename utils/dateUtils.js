function getCurrentDate() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1; // Note: January is 0
  var day = today.getDate();

  // Add leading zeros if necessary
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  var currentDate = year + "/" + month + "/" + day;
  return currentDate;
}

module.exports = { getCurrentDate };
