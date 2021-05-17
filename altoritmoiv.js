//1. Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 

function printMayor(arr,y) {
    var cont = 0;
    for(var i = 0; i < arr.length ; i++){
        if(arr[i]>y){
            cont++;
        }
    }
    return cont;    
}
console.log("Existen: " + printMayor([2,3,4,5,6,7,23,4],7) + " numeros mayores que Y");

// 2. Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 

function maxMin(arr) {
    var max = -Infinity;
    var min = Infinity;
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        avg += arr[i];
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }
    }
    console.log("El maximo es: " + max);
    console.log("El minimo es: " + min);
    console.log("El promedio es: " + avg/(arr.length)); 
}
maxMin([1,2,3,4,5,6]);

// 3. Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos 
// se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera 
// devolver [1,2, “Dojo”, “Dojo”, 5].

function replaceNegatives(arr) {
    for(var i = 0; i < arr.length; i++){
        if(-1<0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(replaceNegatives([-1,-2,-3,-5,-5]));

// 4. Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). 
// Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].

function removeIndex(arr,x,y) {
    var count = 0;
    for(var i = x ; i <= y ; i++){
        count++;
    }
    arr.splice(x,count);
    return arr;
}
console.log(removeIndex([20,30,40,50,60,70],2,4));