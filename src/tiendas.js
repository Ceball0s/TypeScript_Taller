// Definición de interfaces con tipado en TypeScript
// Lista de tiendas
var tiendas = [
    {
        id: 1,
        nombre: "San Juan",
        categorias: [
            {
                nombre: "Electrónica",
                productos: [
                    { nombre: "TV", precio: 1599.99, stock: 10, estado: true },
                    { nombre: "Radio", precio: 49.99, stock: 25, estado: true },
                    { nombre: "Teléfono", precio: 699.99, stock: 15, estado: false },
                ],
            },
            {
                nombre: "Ropa",
                productos: [
                    { nombre: "Camiseta", precio: 19.99, stock: 50, estado: true },
                    { nombre: "Pantalón", precio: 39.99, stock: 30, estado: true },
                    { nombre: "Zapatos", precio: 89.99, stock: 20, estado: false },
                ],
            },
        ],
    },
    {
        id: 2,
        nombre: "Santa Marta",
        categorias: [
            {
                nombre: "Electrónica",
                productos: [
                    { nombre: "TV", precio: 1699.99, stock: 8, estado: true },
                    { nombre: "Radio", precio: 59.99, stock: 20, estado: true },
                    { nombre: "Teléfono", precio: 799.99, stock: 12, estado: true },
                ],
            },
            {
                nombre: "Ropa",
                productos: [
                    { nombre: "Camiseta", precio: 14.99, stock: 60, estado: true },
                    { nombre: "Pantalón", precio: 49.99, stock: 25, estado: false },
                    { nombre: "Zapatos", precio: 99.99, stock: 15, estado: true },
                ],
            },
        ],
    },
];
// Función para mostrar la información de las tiendas
function mostrarInformacionTiendas(tiendas) {
    console.log("\n=== Información de Tiendas ===");
    tiendas.forEach(function (tienda) {
        console.log("Tienda: ".concat(tienda.nombre, " (ID: ").concat(tienda.id, ")"));
        tienda.categorias.forEach(function (categoria) {
            console.log("  Categor\u00EDa: ".concat(categoria.nombre));
            categoria.productos.forEach(function (producto) {
                console.log("    Producto: ".concat(producto.nombre));
                console.log("    Precio: ".concat(producto.precio.toFixed(2), " Pesos"));
                console.log("    Stock: ".concat(producto.stock));
                console.log("    Estado: ".concat(producto.estado ? "Activo" : "Inactivo"));
            });
        });
    });
}
// Función para buscar un producto en todas las tiendas
function buscarProducto(nombre) {
    var encontrado = false;
    tiendas.forEach(function (tienda) {
        tienda.categorias.forEach(function (categoria) {
            categoria.productos.forEach(function (producto) {
                if (producto.nombre.toLowerCase() === nombre.toLowerCase() && producto.estado) {
                    encontrado = true;
                    console.log("Producto: ".concat(producto.nombre));
                    console.log("Tienda: ".concat(tienda.nombre));
                    console.log("Precio: ".concat(producto.precio.toFixed(2), " Pesos"));
                    console.log("Stock: ".concat(producto.stock));
                    console.log("Estado: ".concat(producto.estado ? "Activo" : "Inactivo"));
                    console.log("=========================");
                }
            });
        });
    });
    if (!encontrado) {
        console.log("Producto \"".concat(nombre, "\" no disponible en ninguna tienda."));
    }
}
// Ejemplo de ejecución
var productoABuscar = process.argv[2]; // Tomar el nombre del producto desde la línea de comandos
if (productoABuscar) {
    buscarProducto(productoABuscar);
}
else {
    console.log("Por favor, ingresa un producto a buscar.");
}
// Ejecutar la función para mostrar información de tiendas
//mostrarInformacionTiendas(tiendas);
