var nombre    = document.getElementById("nombre");
var operacion = document.getElementById("operacion");
var num1      = document.getElementById("num1");
var num2      = document.getElementById("num2");
var operar    = document.getElementById("operar");
var records   = document.getElementById('records');
var resultado;

operar.addEventListener('click', function datos(event){
  event.preventDefault();

  var inputGeneral = document.getElementsByClassName('input');

  do {
        var num1      = document.getElementById("num1");
        var num2      = document.getElementById("num2");
        var operacion = document.getElementById("operacion");

        if(inputGeneral[0].value.length==0 ||
           inputGeneral[1].value.length==0 ||
           inputGeneral[2].value.length==0 ||
           inputGeneral[3].value.length==0)
           {alert("Falta Completar");}

       else{ var respuesta = confirm("¿Desea hacer otra operación?");
             resultado = calculadora(operacion.value.toString(),
                                     parseInt(num1.value),
                                     parseInt(num2.value));
          if(respuesta ==true)
          { operacion1  = prompt("Ingrese la operacion");
            num21       = prompt("Ingrese el segundo numero");
            num21       = parseInt(num21);
            resultado21 = parseInt(resultado);
            document.getElementById("operacion").value = operacion1;
            document.getElementById("num1").value      = resultado21;
            document.getElementById("num2").value      = num21;}}
  }

  while(respuesta == true);
        records.innerHTML = print(resultado);});

function calculadora(operacion,num1,num2)
  switch(operacion){ case "suma"          :return num1+num2     ;break;
                     case "resta"         :return  num1-num2    ;break;
                     case "multiplicacion":return  num1*num2    ;break;
                     case "division"      :return  num1/num2    ;break;
                     default              :return mensajeError();break;}}

function mensajeError(){return alert("Ingrese operacion válida");}

function print(resultado){
    return  "<ul><li>"            + "Nombre: "         + nombre.value     +  "</li>"
                         + "<li>" + "Operacion: "      + operacion.value  + "</li>"
                         + "<li>" + "Primer Numero: "  + num1.value       + "</li>"
                         + "<li>" + "Segundo Numero: " + num2.value       + "</li>"
                         + "<li>" + "Resultado: "      +   resultado
          + "</li></ul>";
}
