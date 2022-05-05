console.log('Hello, World!');
console.log(23 + 97);

// An example Array
let primes = [2, 3, 5, 7];
primes[primes.length];
console.log(primes);
const primeAdd = primes[0] + primes[1];
console.log(primeAdd);
function fact(x) {
  if (x > 1) return x * fact(x - 1);
  else return 1;
}
console.log(fact(4));
console.log(fact(5));
console.log(fact(6));

const time = Date.now();
console.log(time);

const date = new Date();
console.log(date);

let year = date.getFullYear();

document.getElementById('copyright').innerHTML = '© Sparky' + ' ' + year;

console.log(year);
