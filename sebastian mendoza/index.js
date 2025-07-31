var suma=function(){
var valorx=document.getElementById('num1').value
var valory=document.getElementById('num2').value
document.getElementById('resultad').innerHTML="la suma es: "+(parseInt(valorx)+parseInt(valory))
}

var resta=function(){
var valorx=document.getElementById('num1').value
var valory=document.getElementById('num2').value
document.getElementById('resultad').innerHTML="la resta es: "+(parseInt(valorx)-parseInt(valory))
}

var multiplicacion=function(){
var valorx=document.getElementById('num1').value
var valory=document.getElementById('num2').value
document.getElementById('resultad').innerHTML="la multiplicacion es: "+(parseInt(valorx)*parseInt(valory))
}

var division=function(){
var valorx=document.getElementById('num1').value
var valory=document.getElementById('num2').value
document.getElementById('resultad').innerHTML="la division es: "+(parseInt(valorx)/parseInt(valory))
}

