const kelvin = 293;

const celsius = kelvin - 273;

let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

const kelvinZero = 0;
const celsiusZero = kelvinZero - 273;
let fahrenheitZero = celsiusZero * (9 / 5) + 32;
fahrenheitZero = Math.floor(fahrenheitZero);

console.log(`The temperature at 0 Kelvin is ${fahrenheitZero} degrees Fahrenheit.`);
