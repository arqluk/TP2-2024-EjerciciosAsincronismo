console.log("Ejercicios asincronismo")
 console.log();

function exampleAsync(valor) {
    return new Promise((resolve) => {
    setTimeout(() => {resolve(valor + 1)}, 1000)
    });
}

async function invokeExampleAsync() {

    console.log("-".repeat(50));
    console.log("Ejercicio 1")

    // Invocación usando promesas
    await exampleAsync(9).then((res) => {
        console.log("RESULTADO USANDO PROMESA: ", res)
    });
    
    // Invocación usando asunc/await
    await (async () => {
        const resultAsyncAwait = await exampleAsync(9);
        console.log("RESULTADO USANDO ASYNC/AWAIT: ", resultAsyncAwait);
    })();
}


// -----------------------------------------------------------------------------------------


function operation(valor) {
    const piValidValue = 3.14
    const piWrongValue = 3.10
    return new Promise((resolve, reject) => {
        if(valor === piValidValue) {
            resolve("El valor de pi es correcto")
        } else {
            reject("El valor de pi es incorrecto")
        }
    });
}

function invokeOperation() {
    console.log("-".repeat(50));
    console.log("Ejercicio 2")

    const piValidValue = 3.14
    const piWrongValue = 3.10

    operation(piValidValue)
    .then((res) => console.log("Válido! ", res))
    .catch((err) => console.log(err))

    operation(piWrongValue)
    .then((res)=> console.log(res))
    .catch((err)=> console.log("No válido! ", err))
}


// -----------------------------------------------------------------------------------------


//const data = await fetch("https://restcountries.com/v3.1/name/argentina")

function invokeCountryInformation(data) {
async function countryInformation(data) {
    console.log("-".repeat(50));
    console.log("Ejercicio 3")

const myCountry = await data.json()
console.log("Datos: ", myCountry)
}
countryInformation(data)
}


// -----------------------------------------------------------------------------------------


// Ejecución de las funciones de manera secuencial para que la salida por consola sea en orden de ejercicio
async function invoke() {
    await invokeExampleAsync();  // Espera a que esta función termine antes de seguir
    await invokeOperation();     // Se ejecuta después de invokeExampleAsync()
    const data = await fetch("https://restcountries.com/v3.1/name/argentina");
    await invokeCountryInformation(data); // Se ejecuta después de invokeOperation()
}

invoke();