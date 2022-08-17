//Insere o numero
function insert(number){
    var numero = document.getElementById('Resultado').innerHTML; 
    document.getElementById('Resultado').innerHTML = numero + number
 }
 //Limpa a calculadora
 function clean(){
     document.getElementById('Resultado').innerHTML = "0";
 }
 //Apaga um numero
 function back(){
     var Resultado = document.getElementById('Resultado').innerHTML;
     document.getElementById('Resultado').innerHTML = Resultado.substring(0,Resultado.length - 1)
 }
 //Calcula a operacao
 function calcular(){
     var Resultado = document.getElementById('Resultado').innerHTML;
     if(Resultado){
         document.getElementById('Resultado').innerHTML = eval(Resultado)
     }
     else{
         document.getElementById('Resultado').innerHTML = ''
     }
 }
