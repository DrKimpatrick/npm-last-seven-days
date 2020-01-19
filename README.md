#### Install

`npm i npm-last-seven-days`

#### Description

    - Package returns an array containing the last 7 days in words && in numbers

#### API

    - lastSevenInNumbers && lastSevenInWords
    - All methods accept an optional date parameter
    - Current date is considered if date param is not passed in
    - If date param is invalid, current date is considered
    - { '1': 'MON', '2': 'TUE', '3': 'WED', '4': 'THUR', '5': 'FRI', '6': 'SAT', '0': 'SUN' }

#### Example

- Getting last seven (7) days in numbers

  ```
  const { lastSevenInNumbers } = require('npm-last-seven-days');

  // 1. Without date argument
  const days = lastSevenInNumbers();

  // 1. With date argument
  const days = lastSevenInNumbers(new Date());

  // say today is friday
  // [6, 0, 1, 2, 3, 4, 5]

  ```

- Getting last seven (7) days in Words

  ```
  const { lastSevenInWords } = require('npm-last-seven-days');

  // 1. Without date argument
  const days = lastSevenInWords();

  // 1. With date argument
  const days = lastSevenInWords(new Date());

  // say today is friday
  // ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI']

  ```
