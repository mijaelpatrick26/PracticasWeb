// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");
var btnLimpiar=document.getElementById("btnLimpiar");

// Creamos un procedimineto para mostrar
function MostrarAlumno(){
    // Declaramos una variable para guardar los datos
    var listaalumno=Mostrar();
    // Selecciono el tbody de la tabla donde voy a mostrar la información
    var tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    // Agregamos al tbody las filas que se registren
    for(var i=0;i<listaalumno.length;i++){
        //Declarando una variable para las filas
        var fila=tbody.insertRow(i);
        // Declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocur=fila.insertCell(3);
        var titulotur=fila.insertCell(4);
        var tituloest=fila.insertCell(5);
        //Agregamos valores
        titulonom.innerHTML=listaalumno[i].nombre;
        tituloape.innerHTML=listaalumno[i].apellido;
        titulodni.innerHTML=listaalumno[i].dni;
        titulocur.innerHTML=listaalumno[i].curso;
        titulotur.innerHTML=listaalumno[i].turno;
        tituloest.innerHTML=listaalumno[i].estado;
        tbody.appendChild(fila);
    }
}

// Creamos un procedimineto para registrar los datos
function RegistrarAlumno(){
    //Validacion de datos
    function Validar(){
        // Reiniciamos el estilo error
        error.innerHTML=""
        // Llamamosa los procedimientos para validar
        ValidarNombre();
        ValidarApellido();
        ValidarDni();
        ValidarCurso();
        ValidarTurno();
        ValidarEstado();
    }
    
    // CReamos un procedimineto para asignar la clase error
    function LlamarClase(m){
        error.style.display="block";
        error.innerHTML+="<li>"+m+"</li>"
    }
    
    //Creamos una función Registrar
    function Registrar(){
        //Reainicamos el estilo error
        error.innerHTML="";
        if(txtNom.value=="" || txtNom.value==null){
            LlamarClase("Por favor ingresa tus nombres");
            txtNom.focus();
        }else if(txtApe.value=="" || txtApe.value==null){
            LlamarClase("Por favor ingresa tus apellidos");
        }else if(txtDni.value=="" || txtDni.value==null){
            LlamarClase("Por favor ingresa tu DNI");
        }else if(cboCurso.value==0 || cboCurso.value==""){
            LlamarClase("Por favor selecciona un curso");
        }else if(rbM.checked==false && rbT.checked==false && rbN.checked==false){
            LlamarClase("Por favor selecciona un turno");
        }else if(chkEst.checked==false){
            
        }
    }
    // Capturado valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    var cur="";
    var indice=cboCurso.selectedIndex;
    switch(indice){
        case 1:
            cur="Diseño Web";
            break;
        case 2:
            cur="Base de Datos";
            break;
        case 3:
            cur="Programación Java";
            break;
        default:
            cur="";
            break;
    } 
    var tur="";
    if(rbM.checked){
        tur="Mañana";
    }else if(rbT.checked){
        tur="Tarde";
    }else if(rbN.checked){
        tur="Noche";
    }
    var est="";
    if(chkEst.checked){
        est="Habilitado"
    }else{
        est="Deshabilitado"
    }
    // Llamamos al procedimineto registrar
    Registrar(nom, ape, dni, cur, tur, est);
    // Llamamos al procedmiento para mostrar
    MostrarAlumno();
}

//Llamamosa al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click", RegistrarAlumno);