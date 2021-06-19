// Declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");

//Creamos un procedimiento para validar
// Nombre
function ValidarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus nombres</li>"
    }else{
        error.style.display="none";
    }
}
// Apellido
function ValidarApellido(){
    if(txtApe.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus apellidos</li>"
    }else{
        error.style.display="none";
    }
}
// Correo
function ValidarCorreo(){
    if(txtCor.value=="" || txtCor.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese su correo</li>"
    }else{
        error.style.display="none";
    }
}
// Sexo
function ValidarSexo(){
    if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione un sexo</li>"
    }else{
        error.style.display="none";
    }
}

// Estado
function ValidarEstado(){
    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione el estado</li>"
    }else{
        error.style.display="none";
    }
}
// Creamos un procedimiento para validar
function Validar(){
    // Reiniciamos el estilo error
    error.innerHTML=""
    // Llamamosa los procedimientos para validar
    ValidarNombre();
    ValidarApellido();
    ValidarCorreo();
    ValidarSexo();
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
    }else if(txtApe.value=="" || txtApe.value==nul){
        LlamarClase("PPor favor ingresa tus apellidos");
    }else if(txtCor.value=="" || txtCor.value==nul){
        LlamarClase("PPor favor ingresa tu correo");
    }else if(txtApe.value=="" || txtApe.value==nul){
        LlamarClase("PPor favor ingresa tus apellidos");
    }else if(rvMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        LlamarClase("Por favor selecciona un sexo");
    }else if(chkEst.checked==false){

    }
}