const time = Date.now();
console.log(time);

const date = new Date();
console.log(date);

let year = date.getFullYear();

document.getElementById('copyright').innerHTML = '© Sparky' + ' ' + year;

console.log(year);
