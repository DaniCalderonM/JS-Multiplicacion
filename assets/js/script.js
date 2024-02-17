// Te han pedido un programa que al ingresar un número,
// obtenga las tablas de multiplicar desde el 1 hasta el número ingresado. Además, debe
// mostrar el factorial para los mismos números. El resultado debe ser mostrado por la consola
// del navegador, por ejemplo, si ingresan el número 3 en la consola deberían obtener el
// siguiente resultado:
// 1 x 3 = 3
// 2 x 3 = 6
// 3 x 3 = 9
// Factorial de 1 es: 1
// Factorial de 2 es: 2
// Factorial de 3 es: 6
// Con los conocimientos que has adquirido de JavaScript, desarrolla una solución que cumpla
// con lo solicitado, de acuerdo a los siguientes requerimientos.

// Requerimientos
// 1. Crear una función para solicitar el número y validar antes de mostrar el resultado que
// el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al
// rango, mostrar un mensaje al usuario: "número fuera del rango" (3 Puntos)
// 2. Utilizar las características propias de ES6 como let y arrow function para desarrollar
// el ejercicio (2 Puntos). 
// 3. Generar y mostrar por consola el resultado de las operaciones. (3 Puntos)
// 4. Aplicar un ciclo for anidado para obtener el factorial del número ingresado (2 Puntos). 

// Funcion Arrow con Recursividad gracias a Luis
const programa = () => {
    //Pedimos al usuario que ingrese un numero entre 1 y 20.
    const numero = Number(prompt("Ingrese un numero entre 1 y 20: "));
    //Creamos la logica para saber si el numero entra al ciclo o no.
    if (numero >= 1 && numero <= 20) {
        //Si el numero entra en el ciclo, comienza el calculo de la 
        //multiplicacion y del factorial.
        // Multiplicacion
        for (let i = 1; i <= numero; i++) {
            let resultadoMultiplicacion = i * numero;
            console.log(`${i} x ${numero} = ${resultadoMultiplicacion}`);
            //El factorial es un for anidado dentro del for de la multiplicacion,
            //el cual depende de "i" para realizar el calculo.
            // Factorial
            let resultadoFactorial = 1;
            for (let j = 1; j <= i; j++) {
                resultadoFactorial = resultadoFactorial * j;
            }
            console.log(`Factorial de ${i} es: ${resultadoFactorial}`);
        }
        //En caso de que el numero ingresado sea mayor a 20 o menor a 1
        //entra en el else y nos retorna un alert y console.log con el mensaje correspondiente.
    } else {
        console.log("Número fuera del rango");
        alert("Número fuera del rango");
        //Al llamar a la funcion en este lugar, hacemos que sea recursivo,
        //es decir, que el programa se llamara asi mismo y nos permitira seguir
        //una vez se ingrese el valor correcto entre 1 y 20.
        programa();
    }
}
programa();
