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
const simulardiadeventas = () => {
    for (let i = 1; i < 5; i++) {
        console.log(`cliente ${i}`);
        registrarVenta(8);
    }
};
function diagnosticoDeInventario() {
    if (stockproducto >= 50) {
            console.log("nivel de stock optimo");
    }else if (stockproducto <= 40) {
        console.log("stock moderado , considere reponer pronto");
    }else {
        console.log(" alerta bajo stock , reposicion urgente");
    }
    switch (ventastotales) {
        case 40:
            console.log("producto estrella , alta demanda");
            break;
        case 30:
            console.log("ventas moderadas");
            break;
        case 20:
            console.log("baja rotacion del producto");
    }
}
simulardiadeventas();
diagnosticoDeInventario();