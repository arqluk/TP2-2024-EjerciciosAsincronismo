// Optimización de index2.js
// Los ejercicios se muestran por consola en orden

console.log("Ejercicios asincronismo")
console.log();

const piValidValue = 3.14
const piWrongValue = 3.10
const valor = 9

function exampleAsync(valor) {
    return new Promise((resolve) => {
       setTimeout( () => { resolve(valor + 1) }, 1000 )
    });
}

console.log("-".repeat(50));
console.log("Ejercicio 1")

// Invocación usando promesas

exampleAsync(valor)
    .then((res) => console.log("RESULTADO USANDO PROMESA: ", res));

// Invocación usando asunc/await
const resultAsyncAwait = await exampleAsync(valor);
console.log("RESULTADO USANDO ASYNC/AWAIT: ", resultAsyncAwait);
;

// -----------------------------------------------------------------------------------------


function operation(valor) {
    return new Promise((resolve, reject) => {
        if (valor === piValidValue) {
            resolve("El valor de pi es correcto")
        } else {
            reject("El valor de pi es incorrecto")
        }
    });
}

console.log("-".repeat(50));
console.log("Ejercicio 2")

operation(piValidValue)
    .then((res) => console.log("Válido! ", res))
    .catch((err) => console.log(err))

operation(piWrongValue)
    .then((res) => console.log(res))
    .catch((err) => console.log("No válido! ", err))


// -----------------------------------------------------------------------------------------


const data = await fetch("https://restcountries.com/v3.1/name/argentina")

async function countryInformation(data) {
    console.log("-".repeat(50));
    console.log("Ejercicio 3")

    const myCountry = await data.json()
    console.log("Datos: ", myCountry)
}
countryInformation(data)
