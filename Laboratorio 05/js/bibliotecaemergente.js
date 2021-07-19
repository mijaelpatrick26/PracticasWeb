//Creamos una función para cuando cargue el documento
function Cargar(url,ancho,alto){
    // Declaramos variables para calcular ancho y alto de la pantalla
    var anc=screen.width;
    var alt=screen.height;
    // Declaramos variables para la posicion
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    window.open(url,titulo,"width="+ancho+",height="+alto+",left="+x+",top="+y+",scrollbar=NO")
}
//Llamamos a la función cargar
window.onload=Cargar();