let a = 'red';
let b = 'blue';

mostrarValores(a,b);

// trocando os valores

let aux = a;
a = b;
b = aux;

mostrarValores(a,b)

function mostrarValores(valor1, valor2){
    console.log('a = ',valor1);
    console.log('b = ',valor2,'\n\n');
}