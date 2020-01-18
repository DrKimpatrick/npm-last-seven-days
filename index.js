    
    function isValidDate(d) {
        const isDate = d instanceof Date && !isNaN(d);
        return isDate ? d: new Date();
      }

    function lastSevenInNumbers (today = new Date()){
        const date = isValidDate(today);
        const weekDay = date.getDay(); // day of the week
        const weekdays = [1, 2, 3, 4, 5, 6, 7]; // Week days
        
        const sortedDays = [];

        const nextArr = [];

        for (let i = weekDay; i >= 1; i--) {
            sortedDays.push(i);
        }

        for (let i = sortedDays[0]; i < weekdays.length; i++) {
            nextArr.push(weekdays[i]);
        }

        // sorting nextArr
        const h = nextArr.sort();

        const firstArr = sortedDays.reverse();

        const finalArr = [...h, ...firstArr];

        return finalArr;
    }


     function lastSevenInWords (today = new Date()) {
        const date = isValidDate(today);
        const daysNo = { '1': 'MON', '2': 'TUE', '3': 'WED', '4': 'THUR', '5': 'FRI', '6': 'SAT', '7': 'SUN' };
        const arr = lastSevenInNumbers(date);

        const newArr = arr.map(key => {
            return daysNo[`${key}`];
        });

        return newArr;
    }

module.exports = {lastSevenInNumbers, lastSevenInWords};

// console.log(lastSevenInNumbers({}, 'hh'));
// console.log(lastSevenInWords('new Date()'));
// console.log(isValidDate('new Date()'))