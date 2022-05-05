let firstName = ['James', 'Bob', 'Fred', 'Dave', 'Adam'];
let lastName = ['Webb', 'Smith', 'Davison', 'Johnson', 'McKinlay'];
let racePosition = ['first', 'second', 'third'];

const randomFirstName = Math.floor(Math.random() * firstName.length);
const randomLastName = Math.floor(Math.random() * lastName.length);
const randomPosition = Math.floor(Math.random() * racePosition.length);

console.log(
  `Hello ${(randomFirstName, firstName[randomFirstName])} ${
    (randomLastName, lastName[randomLastName])
  }. You finished in ${(randomPosition, racePosition[randomPosition])} place`
);

if (randomPosition == '0') {
  console.log('Well Done');
} else {
  console.log('Better luck next time.');
}

// (congratsMessage) => {
//   let congrats;
//   if ((racePosition = 'first')) {
//     congrats = 'Well Done';
//     console.log(congrats);
//   } else {
//     congrats = 'Better luck next time.';
//     console.log(congrats);
//   }
//   return congrats;
// };
