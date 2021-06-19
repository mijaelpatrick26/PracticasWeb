Algoritmo Ejemplo3
	Definir pre, tot, sub, igv Como Real;
	Definir can Como Entero;
	pre=0; tot=0; sub=0; igv=0; can=0;
	Escribir "Ingrese el precio del producto";
	Leer pre;
	Escribir "Ingrese la cantidad que compró";
	leer can;
	sub=pre*can;
	igv=(18/100)*sub;
	tot=sub+igv;
	Escribir "El subtotal es de S/ ",sub;
	Escribir "El igv es de S/ ",igv;
	Escribir "El total a pagar es de S/ ",tot;
FinAlgoritmo
