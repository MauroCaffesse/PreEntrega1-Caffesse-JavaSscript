// Algoritmo que informa el precio final de cada producto dependiendo de la cantidad de cuotas elegidas.

let numProductos = Number(prompt('Ingrese cantidad de productos'));

if (isNaN(numProductos)) {
  alert('Error: No ingresó un número')
} else {
  let precioProd; 
  let cuotas;

  for (let i = 1; i <= numProductos ; i++) {
    precioProd = Number(prompt('Ingrese precio del producto'));
    cuotas = Number(prompt('ingrese la cantidad de cuotas que desea realizar su compra'));
    
    if (cuotas <= 3 && cuotas >= 1) {
      alert('Su compra no presenta interes' + '\n' + 'El precio final del producto es $' + precioProd);
    } else if (cuotas > 3 && cuotas <= 6) {
      alert('Su compra presenta un interes del 10%' + '\n' + 'El precio final del producto es $' + precioProd * 1.1);
    } else if (cuotas > 6 && cuotas <= 12) {
      alert('Su compra presenta un interes del 20%' + '\n' + 'El precio final del producto es $' + precioProd * 1.2);
    } else {
      alert('El limite de cuotas es 12');
    }    
  }
}

