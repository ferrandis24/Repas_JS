let X = prompt("Dime un numero del 1 al 12")
while (x  > 12 || X <= 0) {

    X = prompt("Dime un numero del 1 al 12");
    alert = ("tienes un error")
}
function Dado(params) {
   let ResultDado = Math.floor(Math.random() * 13) + 1;
   console.log(ResultDado);
   if (ResultDado == X ) {
       alert("Ganaste")
   }
   else{
       alert("intentalo de nuevo")
   }
}
Dado()