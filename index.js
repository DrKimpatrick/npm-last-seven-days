    function lastSevenInNumbers (today = new Date()){
        const weekDay = today.getDay(); // day of the week
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
        const daysNo = { '1': 'M', '2': 'T', '3': 'WED', '4': 'THUR', '5': 'F', '6': 'SAT', '7': 'SUN' };
        const arr = lastSevenInNumbers(today);

        const newArr = arr.map(key => {
            return daysNo[`${key}`];
        });

        return newArr;
    }

module.exports = {lastSevenInNumbers, lastSevenInWords};

// console.log(lastSevenInNumbers(new Date()));
// console.log(lastSevenInWords(new Date()));
