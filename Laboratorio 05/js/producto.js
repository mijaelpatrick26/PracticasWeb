// Crea un vector que contenga la información dl registro
var producto=[];
// Creamos un procedimiento para poder registrar
function Registrar(nomproducto,catproducto,preproducto,canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        categoria:catproducto,
        precio:preproducto,
        cantidad:canproducto
    };
    producto.push(NuevoProducto);
}

// Creamos una función para mostrar la información del registro
function Mostrar(){
    return producto;
}