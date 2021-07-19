//Declarando variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnIngresar=document.getElementById("btnIngresar");
//Creamos un procedimiento para limpiar
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}


//Creamos una función para validar el usuario
function ValidarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Integrese su correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese su contraseña");
        txtCon.focus();
    }else{
        //capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;
        auth.signInWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    alert("Bienvenidos al Sistema");
    window.location="pagina11.html"
  })
  .catch((error) => {
    alert("Usuario o contraseña invalida");
    Limpiar();
  });

    }
}
// Llamamos al procedimiento en el boton
btnIngresar.addEventListener
