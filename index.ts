interface Producto {
    nombre: string;
    precio: number;
    stock: number;
    estado: boolean;
  }
  
  interface Categoria {
    nombre: string;
    productos: Producto[];
  }
  
  interface Tienda {
    id: number;
    nombre: string;
    categorias: Categoria[];
  }
  
  const tiendas: Tienda[] = [
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
  
  function mostrarInformacionTiendas(tiendas: Tienda[]): void {
    tiendas.forEach((tienda) => {
      console.log(`Tienda: ${tienda.nombre} (ID: ${tienda.id})`);
      tienda.categorias.forEach((categoria) => {
        console.log(`  Categoría: ${categoria.nombre}`);
        categoria.productos.forEach((producto) => {
          console.log(`    Producto: ${producto.nombre}`);
          console.log(`    Precio: ${producto.precio.toFixed(2)} Pesos`);
          console.log(`    Stock: ${producto.stock}`);
          console.log(`    Estado: ${producto.estado ? "Activo" : "Inactivo"}`);
        });
      });
    });
  }
  
  function buscarProducto(nombreProducto: string, tiendas: Tienda[]): void {
    tiendas.forEach((tienda) => {
      tienda.categorias.forEach((categoria) => {
        categoria.productos.forEach((producto) => {
          if (producto.nombre.toLowerCase() === nombreProducto.toLowerCase() && producto.estado) {
            console.log(`Producto encontrado en la tienda: ${tienda.nombre}`);
            console.log(`  Precio: ${producto.precio.toFixed(2)} Pesos`);
            console.log(`  Stock: ${producto.stock}`);
          }
        });
      });
    });
  }
  
  // Mostrar la información de las tiendas
  mostrarInformacionTiendas(tiendas);
  
  // Buscar un producto
  buscarProducto("TV", tiendas);