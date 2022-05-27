function costo(){ 
    var entrada=200
    var cantidad=parseInt(document.getElementById('cantidad').value);
    var seleccion=document.getElementById('categoria').value;

    var valor=(cantidad*entrada);

    var descuento=(valor*seleccion)

    document.getElementById('resultado').innerHTML = descuento;

    document.getElementById('resultado').value=descuento;
}  
  

