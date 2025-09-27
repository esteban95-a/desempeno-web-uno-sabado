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

function iniciarGestion() {
    while (true) {
        let opcion = prompt(
            " MENÚ DE GESTIÓN DE INVENTARIO\n\n" +
            "1. Registrar venta\n" +
            "2. Reponer stock\n" +
            "3. Simular día de ventas\n" +
            "4. Ver diagnóstico de inventario\n" +
            "5. Mostrar inventario actual\n" +
            "6. Salir\n\n" +
            "Elige una opción (1-6):"
        );
        switch (opcion) {
            case "1":
                let cantidadVendida = parseInt(prompt("Ingrese la cantidad vendida:"));
                registrarVenta(cantidadVendida);
                break;
            case "2":
                let cantidadRepuesta = parseInt(prompt("Ingrese la cantidad a reponer:"));
                reponerStock(cantidadRepuesta);
                break;
            case "3":
                simulardiadeventas();
                break;
            case "4":
                diagnosticoDeInventario();
                break;
            case "5":
                mostrarInventario();
                break;
            case "6":
                console.log("Saliendo del sistema...");
                return;
            default:
            console.log("Opción no válida. Intente nuevamente.");
        }
    }
}
iniciarGestion();