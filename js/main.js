
// Recibiendo datos:
var operacion= document.getElementById("operacion").value;
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;

switch(operacion){
  case "suma":
  return num1+num2;
  break;

  case "resta":
  return  num1-num2;
    break;

  case "multiplicacion":
  return  num1*num2;
    break;

  case "division":
  return  num1/num2;
    break;
  }
