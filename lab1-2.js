// Exercise 2
function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay(); // 0-6 (0 is sunday)
    const weekdays = ['weekend', 'weekday', 'weekday', 'weekday','weekday','weekday','weekend'];
    //console.log(day);
    return weekdays[day];
}

console.log(isWeekend());