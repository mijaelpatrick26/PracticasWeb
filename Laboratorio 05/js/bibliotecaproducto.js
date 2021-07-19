// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var cboCategoria=document.getElementById("cboCategoria");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");

// Creamos un procedimineto para mostrar
function MostrarProducto(){
    // Declaramos una variable para guardar los datos
    var listaproducto=Mostrar();
    // Selecciono el tbody de la tabla donde voy a mostrar la información
    var tbody=document.querySelector("#tbProducto tbody");
    tbody.innerHTML="";
    // Agregamos al tbody las filas que se registren
    for(var i=0;i<listaproducto.length;i++){
        //Declarando una variable para las filas
        var fila=tbody.insertRow(i);
        // Declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var titulocat=fila.insertCell(1);
        var titulopre=fila.insertCell(2);
        var titulocan=fila.insertCell(2);
        //Agregamos valores
        titulonom.innerHTML=listaregistro[i].nombre;
        titulocat.innerHTML=listaregistro[i].categoria;
        titulopre.innerHTML=listaregistro[i].precio;
        titulocan.innerHTML=listaregistro[i].cantidad;
        tbody.appendChild(fila);
    }
}

// Creamos un procedimineto para registrar los datos
function RegistrarProducto(){
    //Validacion de datos
    // duhbscvsuouondijcnijnaijsnjindjbbhshvfacsc
    // Capturado valores
    var nom=txtNom.value;
    var cat="";
    var indice=cboCategoria.selectedIndex;
    switch(indice){
        case 1:
            cat="Entretenimiento";
            break;
        case 2:
            cat="Tecnologia";
            break;
        case 3:
            cat="Linea Blanca";
            break;
        default:
            cat="";
            break;
    }
    var pre=txtPre.value;
    var can=txtCan.value;
    // Llamamos al procedimineto registrar
    Registrar(nom, cat, pre, can);
    // Llamamos al procedmiento para mostrar
    MostrarProducto();
}

//Llamamosa al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click", RegistrarProducto);