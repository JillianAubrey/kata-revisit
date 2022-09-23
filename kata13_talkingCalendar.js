const talkingCalendar = function(date) {
  const dateArr = date.split('/');
  return `${getMonthName(dateArr[1])} ${getDayWithOrdinal(dateArr[2])}, ${dateArr[0]}`;
};

const getDayWithOrdinal = function(day) {
  return Number(day).toString() + getOridinal(day);
};

const getOridinal = function(number) {
  const lastDigit = Number(number.slice(-1));
  const secondLastDigit = Number(number.slice(-2,-1));
  
  if (secondLastDigit === 1 || lastDigit === 0 || lastDigit > 3) {
    return 'th';
  }
  if (lastDigit === 3) {
    return 'rd';
  }
  if (lastDigit === 2) {
    return 'nd';
  }
  if (lastDigit === 1) {
    return 'st';
  }
};

const getMonthName = function(month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[Number(month) - 1];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));