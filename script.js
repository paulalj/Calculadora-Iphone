let entradaCalculadora = document.getElementById('input');
let temporal = 0;
let num_memoria = 0;

function add(num) {
    let valor = entradaCalculadora.value;
    if (num == 0) {
        if (valor[valor.length - 1] != '0' || valor.length > 1) {
            entradaCalculadora.value += num;
        }
        //Amb l'indexOf es mira si existeix algun '.' i si no retorna un -1, per tant només podrà entrar quan no hi hagi '.'
    } else if (num == '.' && valor.indexOf('.') === -1) {
        if (valor === '') {
            entradaCalculadora.value += '0' + num;
        } else if (valor[valor.length - 1] != '.' && valor != '') {
            entradaCalculadora.value += num;
        }
    } else if (num != '.') {
        entradaCalculadora.value += num;
    }
}

function cleanInput() {
    entradaCalculadora.value = '';
}

function operacionFunction(operador) {
    temporal = entradaCalculadora.value;
    cleanInput();
    operacion = operador;
}

function igual() {
    entradaCalculadora.value = eval(temporal + operacion + entradaCalculadora.value);
}

function inverso() {
    entradaCalculadora.value = -entradaCalculadora.value;
}

function porciento() {
    entradaCalculadora.value = entradaCalculadora.value / 100;
}

function cuadrado() {
    entradaCalculadora.value = entradaCalculadora.value * entradaCalculadora.value;
}

function cubo() {
    entradaCalculadora.value = entradaCalculadora.value * entradaCalculadora.value * entradaCalculadora.value;
}

function pi() {
    entradaCalculadora.value = 3.141592;
}

function raiz() {
    entradaCalculadora.value = entradaCalculadora.value ** (1 / 2);
}

function memorySave() {
    num_memoria = entradaCalculadora.value;
}

function memoryRead() {
    entradaCalculadora.value = num_memoria;
}

function memoryClean() {
    num_memoria = 0;
}

function memoryResta() {
    entradaCalculadora.value = num_memoria - entradaCalculadora.value;
    inverso();
}