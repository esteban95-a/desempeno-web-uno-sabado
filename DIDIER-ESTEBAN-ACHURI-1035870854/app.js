let nombreproducto = prompt("ingrese nombre de producto");
let stockproducto = 50;
let ventastotales = 0;
function mostrarInventario() {
    console.log("producto: " + nombreproducto + " stock: " + stockproducto+" unidades" + " ventas: " + ventastotales+" unidades");
}

const registrarVenta = function(cantidadVendida) {
  if (cantidadVendida <= stockproducto) {
    stockproducto -= cantidadVendida;
    ventastotales += cantidadVendida;
    console.log(`Éxito`);
  } else {
    console.log(" Stock insuficiente para esta venta.");
  }
};
const reponerStock = (cantidadRepuesta) => {
  stockproducto += cantidadRepuesta;
  console.log(` Se añadieron ${cantidadRepuesta} unidades.\nNuevo stock: ${stockproducto}.`);
};
registrarVenta(20);
reponerStock(30);
mostrarInventario();