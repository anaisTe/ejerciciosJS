//Contraseña invalida
function contrasenaValida(passwrd) {
    switch (passwrd) {
    case '2Fj(jjbFsuj':
        console.log('true');
        break;
    case 'eoZiugBf&g9':
        console.log('true');
        break;
    default:
        console.log('false');
    }
}

//Calcular impuestos
function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos *= 0.40
    } else {
        return 0
    }
}

//IMC (ïndice de masa corporal)
function bmi(peso, altura) {
    let formu = peso / (altura*altura)
    if (formu < 18.5) {
        console.log("Bajo de peso" );
    } else if (formu > 18.5 && formu < 24.9) {
        console.log("Normal");
    } else if (formu > 25 && formu < 29.9) {
        console.log("Sobrepeso");
    } else if (formu >= 30) {
        console.log("Obeso");
    }
    return formu
}

//Imprimir un arreglo
function imprimirArreglo(arr1) {
    let element;
    for (let i = 0; i < arr1.length; i++) {
        element = arr1[i];
        // console.log(element);
    }
}

//Número de Likes
function likes(num) {
    if (num < 1000) {
        return num.toString();
    } else if (num >= 1000 && num < 1000000) {
        num = (num / 1000).toFixed(0);
        return num.toString() + 'K';
    } else {
        num = (num / 1000000).toFixed(0);
        return num.toString() + 'M';
    }
}

//FizzBuzz
function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'FIZZBUZZ';
    } else if (num % 3 == 0) {
        return 'FIZZ';
    } else if (num % 5 == 0) {
        return 'BUZZ';
    } else {
        return num;
    }
}

// Contar rango de números
function contarRango(num1, num2) {
    let range = 0;
    for (let i = num1 + 1; i < num2; i++) {
        range++;       
    }
    return range
}

// Sumar rango de números
function sumarRango(inicial, final) {
    let res = 0;
    for (let i = inicial; i <= final; i++) {
        res += i;
    }
    return res
}

//Número de aes (letra "a")
function numeroDeAes(str) {
    let numA = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'a') {
            numA++
        }
    }
    return numA
}

//Número de caracteres
function numeroDeCaracteres(str, crt) {
    let strTimes = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === crt) {
            strTimes++
        }
    }
    return strTimes
}

//Sumar arreglo
function sumarArreglo(arr) {
    let sumItem = 0;
    for (let i = 0; i < arr.length; i++) {
        sumItem += arr[i]
    }
    return sumItem
}

//Multiplicar arreglo
function multiplicarArreglo(arr) {
    let newItem = 1;
    for (let i = 0; i < arr.length; i++) {
        newItem *= arr[i]
    }
    return newItem
}

//Remover ceros
function removerCeros(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0) {
            arr.splice(i, 1);
        }
    }
    return arr
}

//Sumar arreglo entre el rango
function sumarArreglo(arr, inicial, final) {
    let res = 0;
    for (let i = inicial; i <= final; i++) {
        res += arr[i]
    }
    return res
}

function asteriscos(str) {
    let ele = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == '*') {
            ele++
        }
    }
    return ele
}

function duplicar(arr) {
    let res = arr.map(x => x * 2)
    return res
}

