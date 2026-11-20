const {ventas} = requiere ("./datos.js");

console.log("cantidad de registros=", ventas.length);
console.log("primer registro:", ventas[0]);
console.log("ultimo registro:", ventas[ventas.length - 1]);
console.log("producto en la posicion 3:", ventas[3].producto);
console.table(ventas); 