// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

// Creamos un procedimineto para mostrar
function MostrarRegistro(){
    // Declaramos una variable para guardar los datos
    var listaregistro=Mostrar();
    // Selecciono el tbody de la tabla donde voy a mostrar la información
    var tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    // Agregamos al tbody las filas que se registren
    for(var i=0;i<listaregistro.length;i++){
        //Declarando una variable para las filas
        var fila=tbody.insertRow(i);
        // Declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulocor=fila.insertCell(2);
        //Agregamos valores
        titulonom.innerHTML=listaregistro[i].nombre;
        tituloape.innerHTML=listaregistro[i].apellido;
        titulocor.innerHTML=listaregistro[i].correo;
        tbody.appendChild(fila);
    }
}

// Creamos un procedimineto para registrar los datos
function RegistrarDatos(){
    //Validacion de datos
    duhbscvsuouondijcnijnaijsnjindjbbhshvfacsc
    // Capturado valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    // Llamamos al procedimineto registrar
    Registrar(nom, ape, cor);
    // Llamamos al procedmiento para mostrar
    MostrarRegistro();
}

//Agregamos un evento al 
// btnRegistrar.addEventListener("click", function(){
//     alert("hola");
// });

//Creamo un procedimiento para mostrar el mensaje
// function Mensaje(){
//     alert("Hola");
// }

// Llamamos al procedimiento en el evento del boton
// btnRegistrar.addEventListener("click", Mensaje);

//Llamamosa al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click", RegistrarDatos);