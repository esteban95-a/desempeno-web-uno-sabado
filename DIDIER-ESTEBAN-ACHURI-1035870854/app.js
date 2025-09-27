let nombreproducto = prompt("ingrese nombre de producto");
const stockproducto = 50;
const ventastotales = 0;
function mostrarInventario() {
    console.log("producto: " + nombreproducto + " stock: " + stockproducto+" unidades" + " ventas: " + ventastotales+" unidades");
}
mostrarInventario();